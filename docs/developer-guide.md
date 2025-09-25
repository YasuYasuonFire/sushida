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

#### 重複データの処理

リストデータに重複が含まれる可能性がある場合は、`useMemo` を使用して効率的に重複除去を行います：

```typescript
// src/ui/components/ResultSummary.tsx の実装例
import { useMemo } from 'react';

const uniqueCompleted = useMemo(() => {
  const seen = new Set<string>();
  return completed.filter((plate) => {
    const key = `${plate.id}-${plate.typed}-${plate.durationMs}-${plate.mistakes}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}, [completed]);
```

**注意点:**
- ユニークキーは対象データの本質的な特徴を組み合わせて生成
- `Set` を使用して O(n) の効率的な重複チェックを実現
- `useMemo` で依存配列が変更された場合のみ再計算

## 既知の問題と解決方法

### 結果画面での重複表示問題

**問題**: ゲーム終了時に完成した皿が結果画面で重複表示されることがある

**原因**: ゲーム状態の更新タイミングによって、同じ皿データが複数回 `completedPlates` 配列に追加される

**解決方法**:
1. 表示レイヤーでの重複除去（推奨）- `ResultSummary` コンポーネントで実装済み
2. データ層での重複防止 - ゲームロジック内での状態管理改善

```typescript
// 表示レイヤーでの対処例
const uniqueItems = useMemo(() => {
  const keyMap = new Map();
  return items.filter(item => {
    const key = generateUniqueKey(item);
    if (keyMap.has(key)) return false;
    keyMap.set(key, true);
    return true;
  });
}, [items]);
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

### 回帰テストのパターン

重要なバグ修正後は必ず回帰テストを追加します。以下は最近修正された重複表示問題のテスト例です：

```typescript
// tests/ui/ResultSummary.test.tsx - 重複データ処理のテスト
import { render, screen } from '@testing-library/react';
import { ResultSummary } from '../../src/ui/components/ResultSummary';

describe('ResultSummary', () => {
  it('renders each completed plate only once when data is duplicated', () => {
    const duplicated = [createCompletedPlate(), createCompletedPlate()];

    render(
      <ResultSummary
        metrics={baseMetrics}
        completed={duplicated}
        onRetry={vi.fn()}
      />
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(
      screen.getByText('今日の握りは 1 皿でした。')
    ).toBeInTheDocument();
  });
});
```

```typescript
// tests/game/useTypingGame.test.ts - ゲームロジック回帰テスト
describe('useTypingGame', () => {
  it('records each completed plate only once', () => {
    const { result } = renderHook(() => useTypingGame({ timeLimit: 10 }));

    act(() => {
      result.current.start();
    });

    // 皿を完成させる
    const letters = result.current.activePlate?.reading.split('') ?? [];
    letters.forEach((letter) => {
      act(() => {
        result.current.handleKeyInput(letter);
      });
    });

    act(() => {
      vi.advanceTimersToNextTimer();
    });

    expect(result.current.completedPlates).toHaveLength(1);
  });

  it('does not duplicate completed plates when the game finishes', () => {
    const { result } = renderHook(() => useTypingGame({ timeLimit: 3 }));

    // ゲーム完了とタイマー満了を検証
    act(() => {
      result.current.start();
    });

    // 皿を完成させてからゲーム終了まで進める
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.status).toBe('finished');
    expect(result.current.completedPlates).toHaveLength(1);
  });
});
```

**テスト設計の原則:**
- **シンプル性**: 一つのテストで一つの側面のみを検証
- **再現性**: 同じ条件で必ず同じ結果を返す
- **独立性**: 他のテストの実行に影響されない
- **明確性**: テスト名から何を検証しているか分かる

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