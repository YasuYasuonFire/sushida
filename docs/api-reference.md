# API リファレンス

## 概要

このドキュメントでは、寿司打クローンゲームのコアAPIについて詳しく説明します。

## 型定義

### GameStatus

```typescript
type GameStatus = 'idle' | 'running' | 'finished';
```

ゲームの現在の状態を表す型です。

- `'idle'`: ゲーム開始前または停止中
- `'running'`: ゲーム進行中
- `'finished'`: ゲーム終了

### SushiPlate

```typescript
interface SushiPlate {
  id: string;
  label: string;
  reading: string;
  price: number;
}
```

寿司皿の基本情報を定義するインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `id` | `string` | 皿の一意識別子 |
| `label` | `string` | 日本語での寿司ネタ名 |
| `reading` | `string` | ローマ字読み |
| `price` | `number` | 皿の価格（円） |

### PlateProgress

```typescript
interface PlateProgress extends SushiPlate {
  typed: string;
  remaining: string;
  mistakes: number;
}
```

タイピング進行中の皿の状態を表すインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `typed` | `string` | 既にタイプした文字列 |
| `remaining` | `string` | 残りタイプする文字列 |
| `mistakes` | `number` | この皿でのミスタイプ数 |

### GameMetrics

```typescript
interface GameMetrics {
  score: number;
  combo: number;
  maxCombo: number;
  correctChars: number;
  missedChars: number;
  coins: number;
}
```

ゲームの成績を表すインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `score` | `number` | 現在のスコア |
| `combo` | `number` | 現在のコンボ数 |
| `maxCombo` | `number` | 最大コンボ数 |
| `correctChars` | `number` | 正確にタイプした文字数 |
| `missedChars` | `number` | ミスタイプした文字数 |
| `coins` | `number` | 獲得した金額（円） |

### GameState

```typescript
interface GameState {
  status: GameStatus;
  timeLimit: number;
  timeLeft: number;
  activePlate: PlateProgress | null;
  upcomingPlates: SushiPlate[];
  completedPlates: CompletedPlate[];
  metrics: GameMetrics;
  startedAt: number | null;
}
```

ゲーム全体の状態を表すインターフェースです。

## Hooks

### useTypingGame

```typescript
function useTypingGame(options?: TypingGameOptions): TypingGameValue
```

タイピングゲームのメインロジックを提供するカスタムフックです。

#### パラメータ

- `options` (optional): ゲーム設定オプション
  - `timeLimit?: number` - 制限時間（デフォルト: 60秒）
  - `laneSize?: number` - レーン内の皿数（デフォルト: 3枚）

#### 戻り値

`TypingGameValue` オブジェクトを返します。このオブジェクトには `GameState` のすべてのプロパティと以下の制御メソッドが含まれます：

| メソッド | 型 | 説明 |
|----------|-----|------|
| `start` | `() => void` | ゲームを開始 |
| `restart` | `() => void` | ゲームを再開始 |
| `handleKeyInput` | `(key: string) => void` | キー入力を処理 |

#### 使用例

```typescript
import { useTypingGame } from './game/useTypingGame';

function GameComponent() {
  const game = useTypingGame({ timeLimit: 90 });

  return (
    <div>
      <p>スコア: {game.metrics.score}</p>
      <p>残り時間: {game.timeLeft}秒</p>
      {game.status === 'idle' && (
        <button onClick={game.start}>ゲーム開始</button>
      )}
    </div>
  );
}
```

## 定数

### スコア関連

```typescript
export const DEFAULT_TIME_LIMIT = 60;      // デフォルト制限時間（秒）
export const DEFAULT_LANE_SIZE = 3;        // デフォルトレーン内皿数
export const CHAR_SCORE = 10;             // 1文字あたりのスコア
export const PLATE_BONUS = 50;            // 皿完成時のボーナススコア
export const MISTAKE_PENALTY = 5;         // ミスタイプ時のペナルティ
```

## ユーティリティ関数

### createPlateProgress

```typescript
function createPlateProgress(plate: SushiPlate): PlateProgress
```

`SushiPlate` から `PlateProgress` オブジェクトを作成します。

### pickRandomPlate

```typescript
function pickRandomPlate(excludeId?: string): SushiPlate
```

ランダムに寿司皿を選択します。`excludeId` が指定された場合、その ID の皿は除外されます。

## スコア計算

### 正確なタイピング

- 基本スコア: `CHAR_SCORE * (1 + combo)`
- 皿完成ボーナス: `PLATE_BONUS`
- コンボは連続して正しくタイプした文字数

### ミスタイピング

- ペナルティ: `MISTAKE_PENALTY`
- コンボはリセットされる
- スコアは0未満にはならない

### 金額計算

完成した皿の `price` プロパティが累積されます。

## イベント処理

### キー入力

- 有効な文字: a-z（小文字に正規化される）
- 無効な入力は無視される
- ゲームが実行中でない場合は無視される

### タイマー

- 1秒間隔で `timeLeft` が減少
- 0になると自動的にゲーム終了
- ゲーム終了時にタイマーは停止