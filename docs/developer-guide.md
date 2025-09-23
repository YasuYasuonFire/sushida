# 開発者ガイド

## はじめに

このガイドでは、寿司打クローンゲームの拡張方法について説明します。

## アーキテクチャ概要

### プロジェクト構造

```
src/
├── app/                 # アプリケーションエントリーポイント
│   ├── App.tsx         # メインアプリケーションコンポーネント
│   └── index.ts        # エクスポート定義
├── game/               # ゲームロジック
│   ├── constants.ts    # ゲーム定数
│   ├── types.ts        # 型定義
│   ├── useTypingGame.ts # メインゲームフック
│   ├── utils.ts        # ユーティリティ関数
│   └── data/
│       └── plates.ts   # 寿司皿データ
├── ui/                 # UIコンポーネント
│   ├── components/     # 再利用可能コンポーネント
│   └── screens/        # 画面コンポーネント
└── styles/
    └── global.css      # グローバルスタイル
```

### 設計思想

1. **関心の分離**: ゲームロジックとUIを明確に分離
2. **型安全性**: TypeScriptによる厳密な型チェック
3. **再利用性**: カスタムフックによるロジックの再利用
4. **テスタビリティ**: ピュア関数によるテストしやすい設計

## 機能拡張ガイド

### 新しい寿司ネタの追加

寿司ネタは `src/game/data/plates.ts` で管理されています。

```typescript
// src/game/data/plates.ts
export const PLATES: SushiPlate[] = [
  // 既存の皿データ...
  {
    id: 'new-sushi',
    label: '新しい寿司',
    reading: 'atarashiizushi',
    price: 150,
  },
];
```

#### 注意点

- `id` は一意である必要があります
- `reading` はローマ字のみ（a-z）で構成してください
- `price` は整数値で指定してください

### 新しいゲームモードの追加

現在は時間制限モードのみですが、新しいモードを追加する場合：

1. **型定義の拡張**

```typescript
// src/game/types.ts
export type GameMode = 'time-attack' | 'endless' | 'level-up';

export interface TypingGameOptions {
  timeLimit?: number;
  laneSize?: number;
  mode?: GameMode; // 新規追加
}
```

2. **ロジックの実装**

```typescript
// src/game/useTypingGame.ts
export const useTypingGame = (options?: TypingGameOptions): TypingGameValue => {
  const mode = options?.mode ?? 'time-attack';

  // モード別のロジック実装
  switch (mode) {
    case 'endless':
      // エンドレスモードロジック
      break;
    // その他のモード...
  }
};
```

### カスタムスコアリングシステム

スコア計算をカスタマイズする場合：

```typescript
// src/game/constants.ts
export const SCORING_CONFIG = {
  CHAR_SCORE: 10,
  PLATE_BONUS: 50,
  MISTAKE_PENALTY: 5,
  COMBO_MULTIPLIER: 1.1, // 新規追加
};
```

```typescript
// カスタムスコア計算関数
export const calculateScore = (
  baseScore: number,
  combo: number,
  customConfig?: Partial<typeof SCORING_CONFIG>
): number => {
  const config = { ...SCORING_CONFIG, ...customConfig };
  return Math.floor(baseScore * Math.pow(config.COMBO_MULTIPLIER, combo));
};
```

### 新しいUIコンポーネントの追加

UIコンポーネントは再利用性を重視した設計にしています。

#### コンポーネント設計原則

1. **単一責任**: 一つのコンポーネントは一つの責任のみ
2. **プロップの最小化**: 必要最小限のプロップのみ受け取る
3. **型安全性**: プロップは厳密に型定義する

#### 例: カスタムボタンコンポーネント

```typescript
// src/ui/components/CustomButton.tsx
interface CustomButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'primary',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};
```

### サウンド機能の追加

サウンド機能を追加する場合の推奨アプローチ：

1. **サウンドマネージャーの作成**

```typescript
// src/game/soundManager.ts
export class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();

  loadSound(name: string, url: string): void {
    const audio = new Audio(url);
    this.sounds.set(name, audio);
  }

  playSound(name: string): void {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
}
```

2. **ゲームロジックへの統合**

```typescript
// useTypingGame.ts 内で
const soundManager = new SoundManager();

// 正解時のサウンド再生
if (normalized === expected) {
  soundManager.playSound('correct');
  // 既存のロジック...
}
```

### パフォーマンス最適化

#### メモ化の活用

```typescript
import { useMemo, useCallback } from 'react';

// 重い計算のメモ化
const expensiveValue = useMemo(() => {
  return heavyCalculation(props);
}, [props]);

// イベントハンドラのメモ化
const handleClick = useCallback(() => {
  // ハンドラロジック
}, [dependencies]);
```

#### コンポーネントの最適化

```typescript
import { memo } from 'react';

export const OptimizedComponent = memo<Props>(({ prop1, prop2 }) => {
  // コンポーネントロジック
});
```

## テスト戦略

### 単体テスト

ゲームロジックの単体テストは Vitest を使用します。

```typescript
// tests/game/utils.test.ts
import { describe, it, expect } from 'vitest';
import { createPlateProgress } from '../../src/game/utils';

describe('createPlateProgress', () => {
  it('should create plate progress with initial values', () => {
    const plate = {
      id: 'test',
      label: 'テスト',
      reading: 'test',
      price: 100,
    };

    const progress = createPlateProgress(plate);

    expect(progress.typed).toBe('');
    expect(progress.remaining).toBe('test');
    expect(progress.mistakes).toBe(0);
  });
});
```

### 統合テスト

React Testing Library を使用してコンポーネントテストを実行します。

```typescript
// tests/ui/components/ScoreBoard.test.tsx
import { render, screen } from '@testing-library/react';
import { ScoreBoard } from '../../../src/ui/components/ScoreBoard';

test('displays score correctly', () => {
  const metrics = {
    score: 1000,
    combo: 5,
    maxCombo: 10,
    correctChars: 50,
    missedChars: 5,
    coins: 300,
  };

  render(<ScoreBoard metrics={metrics} />);

  expect(screen.getByText('1000')).toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
});
```

## デバッグとトラブルシューティング

### 一般的な問題

1. **タイマーが停止しない**
   - `useEffect` のクリーンアップ関数でタイマーをクリアしているか確認

2. **状態更新が反映されない**
   - 状態更新関数内で前の状態を正しく使用しているか確認
   - `useCallback` の依存配列に必要な値が含まれているか確認

3. **パフォーマンス問題**
   - 不要な再レンダリングが発生していないかチェック
   - `React.memo` や `useMemo` の適用を検討

### デバッグツール

開発時に有用なデバッグ情報を表示するカスタムフック：

```typescript
// src/game/useDebugInfo.ts
export const useDebugInfo = (game: TypingGameValue) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Game State:', {
        status: game.status,
        timeLeft: game.timeLeft,
        score: game.metrics.score,
        combo: game.metrics.combo,
      });
    }
  }, [game]);
};
```

## 貢献ガイドライン

### コードスタイル

- Prettier でフォーマット: `npm run format`
- ESLint でリント: `npm run lint`
- TypeScript の厳密モードを使用

### プルリクエスト

1. 機能ブランチを作成: `git checkout -b feature/new-feature`
2. テストを書いて実行: `npm test`
3. ビルドを確認: `npm run build`
4. プルリクエストを作成

### コミットメッセージ

Conventional Commits を使用：

- `feat: 新機能追加`
- `fix: バグ修正`
- `docs: ドキュメント更新`
- `style: コードフォーマット`
- `refactor: リファクタリング`
- `test: テスト追加・修正`