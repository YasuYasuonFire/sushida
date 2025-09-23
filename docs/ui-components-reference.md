# UIコンポーネントリファレンス

## 概要

このドキュメントでは、寿司打クローンゲームのUIコンポーネントについて詳しく説明します。各コンポーネントの責任、プロパティ、使用例を記載しています。

## アーキテクチャ

### コンポーネント階層

```
App
├── TitleScreen (status: 'idle')
├── GameScreen (status: 'running')
│   ├── ScoreBoard
│   └── SushiLane
└── ResultScreen (status: 'finished')
    └── ResultSummary
```

### 設計原則

1. **単一責任の原則**: 各コンポーネントは明確な役割を持つ
2. **プロップスの最小化**: 必要最小限のデータのみを受け取る
3. **型安全性**: TypeScriptによる厳密な型定義
4. **再利用性**: 汎用的で再利用可能な設計

## 画面コンポーネント (Screens)

### TitleScreen

ゲーム開始画面を表示するコンポーネントです。

#### プロパティ

```typescript
interface TitleScreenProps {
  onStart: () => void;
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `onStart` | `() => void` | ゲーム開始時に呼び出されるコールバック |

#### 責任

- ゲーム開始前の案内表示
- スタートボタンとキーボードショートカットの提供
- ゲームルールの簡潔な説明

#### 使用例

```typescript
<TitleScreen onStart={handleGameStart} />
```

### GameScreen

ゲーム進行中の画面を表示するコンポーネントです。

#### プロパティ

```typescript
interface GameScreenProps {
  state: {
    timeLeft: number;
    activePlate: PlateProgress | null;
    upcomingPlates: SushiPlate[];
    metrics: GameMetrics;
  };
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `state.timeLeft` | `number` | 残り時間（秒） |
| `state.activePlate` | `PlateProgress \| null` | 現在タイピング中の皿 |
| `state.upcomingPlates` | `SushiPlate[]` | 次に登場する皿の配列 |
| `state.metrics` | `GameMetrics` | ゲーム成績 |

#### 責任

- スコアボードの表示
- 寿司レーンの表示
- リアルタイムゲーム状態の更新

#### 使用例

```typescript
<GameScreen
  state={{
    timeLeft: 45,
    activePlate: currentPlate,
    upcomingPlates: nextPlates,
    metrics: gameMetrics,
  }}
/>
```

### ResultScreen

ゲーム終了後の結果画面を表示するコンポーネントです。

#### プロパティ

```typescript
interface ResultScreenProps {
  metrics: GameMetrics;
  completedPlates: CompletedPlate[];
  onRetry: () => void;
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `metrics` | `GameMetrics` | 最終的なゲーム成績 |
| `completedPlates` | `CompletedPlate[]` | 完成した皿の詳細情報 |
| `onRetry` | `() => void` | リトライ時に呼び出されるコールバック |

#### 責任

- 最終スコアと統計の表示
- 完成した皿の一覧表示
- リトライボタンの提供

#### 使用例

```typescript
<ResultScreen
  metrics={finalMetrics}
  completedPlates={allCompletedPlates}
  onRetry={handleRetry}
/>
```

## UIコンポーネント (Components)

### ScoreBoard

ゲーム中のスコアと統計情報を表示するコンポーネントです。

#### プロパティ

```typescript
interface ScoreBoardProps {
  metrics: GameMetrics;
  timeLeft: number;
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `metrics` | `GameMetrics` | 現在のゲーム成績 |
| `timeLeft` | `number` | 残り時間（秒） |

#### 表示項目

- **スコア**: 現在の総合スコア
- **残り時間**: ゲーム終了までの秒数
- **コンボ**: 現在のコンボ数と最大コンボ数
- **正タイプ**: 正確にタイプした文字数
- **ミスタイプ**: 間違ってタイプした文字数
- **正確率**: タイピング精度（パーセンテージ）
- **獲得した皿**: 完成した皿の総金額

#### 内部計算

```typescript
// 正確率の計算ロジック
const accuracy =
  metrics.correctChars + metrics.missedChars === 0
    ? 100
    : Math.round(
        (metrics.correctChars / (metrics.correctChars + metrics.missedChars)) * 100
      );
```

#### 使用例

```typescript
<ScoreBoard metrics={currentMetrics} timeLeft={remainingSeconds} />
```

### SushiLane

現在の皿と次の皿を表示するコンポーネントです。

#### プロパティ

```typescript
interface SushiLaneProps {
  activePlate: PlateProgress | null;
  upcomingPlates: SushiPlate[];
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `activePlate` | `PlateProgress \| null` | 現在タイピング中の皿 |
| `upcomingPlates` | `SushiPlate[]` | 次に登場する皿の配列 |

#### 責任

- アクティブな皿の日本語名とローマ字の表示
- タイプ済み文字と残り文字の視覚的表現
- 次に来る皿の予告表示

#### 使用例

```typescript
<SushiLane
  activePlate={currentTypingPlate}
  upcomingPlates={nextPlates}
/>
```

### ResultSummary

ゲーム終了後の詳細な結果を表示するコンポーネントです。

#### プロパティ

```typescript
interface ResultSummaryProps {
  metrics: GameMetrics;
  completedPlates: CompletedPlate[];
}
```

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `metrics` | `GameMetrics` | 最終ゲーム成績 |
| `completedPlates` | `CompletedPlate[]` | 完成した皿の詳細 |

#### 表示内容

1. **総合成績**
   - 最終スコア
   - 最大コンボ数
   - 全体的な正確率
   - 獲得金額

2. **完成した皿の詳細**
   - 皿の種類と価格
   - 完成時間
   - 各皿でのミス回数

#### 使用例

```typescript
<ResultSummary
  metrics={finalGameMetrics}
  completedPlates={completedPlatesList}
/>
```

## スタイリング

### CSSクラス命名規則

BEM（Block Element Modifier）方法論を採用しています。

```css
/* Block */
.score-board { }

/* Element */
.score-board__item { }
.score-board__label { }
.score-board__value { }

/* Modifier */
.score-board__value--highlight { }
```

### レスポンシブデザイン

各コンポーネントはモバイルファーストのアプローチで設計されています。

## アクセシビリティ

### キーボードナビゲーション

- **Enter/Space**: ゲーム開始・リスタート
- **a-z**: タイピング入力（ゲーム中のみ）

### セマンティックHTML

- 適切なHTML要素の使用（`<section>`, `<header>`, `<main>`など）
- ARIAラベルの適切な配置（必要に応じて）

### 視覚的配慮

- 十分なコントラスト比
- 文字サイズの調整可能性
- 色だけに依存しない情報伝達

## パフォーマンス最適化

### メモ化戦略

必要に応じて`React.memo`を使用してコンポーネントの不要な再レンダリングを防ぐことができます：

```typescript
import { memo } from 'react';

export const OptimizedScoreBoard = memo<ScoreBoardProps>(ScoreBoard);
```

### 推奨される最適化

1. **頻繁に更新されるコンポーネント**（ScoreBoardなど）のメモ化
2. **重い計算を含むコンポーネント**のuseMemo使用
3. **イベントハンドラ**のuseCallback使用

## テスト戦略

### コンポーネントテストの例

```typescript
import { render, screen } from '@testing-library/react';
import { ScoreBoard } from './ScoreBoard';

test('displays score correctly', () => {
  const mockMetrics = {
    score: 1000,
    combo: 5,
    maxCombo: 10,
    correctChars: 50,
    missedChars: 5,
    coins: 300,
  };

  render(<ScoreBoard metrics={mockMetrics} timeLeft={30} />);

  expect(screen.getByText('1000')).toBeInTheDocument();
  expect(screen.getByText('30s')).toBeInTheDocument();
  expect(screen.getByText('90%')).toBeInTheDocument(); // accuracy
});
```

## 拡張ガイドライン

### 新しいUIコンポーネントの追加

1. **props型定義**を最初に作成
2. **純粋な関数コンポーネント**として実装
3. **適切なCSSクラス**を付与
4. **テストケース**を作成
5. **このドキュメント**を更新

### カスタマイゼーション

コンポーネントは以下の方法でカスタマイズ可能です：

1. **CSSカスタムプロパティ**による色やサイズの変更
2. **props**による表示内容の制御
3. **子コンポーネント**の差し替え（必要に応じて）

## トラブルシューティング

### よくある問題

1. **コンポーネントが更新されない**
   - propsの参照が変更されているか確認
   - useCallbackの依存配列をチェック

2. **スタイルが適用されない**
   - CSSクラス名の綴りを確認
   - CSS importが正しく行われているか確認

3. **パフォーマンスの問題**
   - 不要な再レンダリングが発生していないかチェック
   - React DevToolsのProfilerを使用して分析