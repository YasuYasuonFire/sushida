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

### CompletedPlate

```typescript
interface CompletedPlate extends PlateProgress {
  durationMs: number;
  completed: boolean;
}
```

完成した皿の情報を表すインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `durationMs` | `number` | 皿完成にかかった時間（ミリ秒） |
| `completed` | `boolean` | 皿の完成状態 |

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

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `status` | `GameStatus` | 現在のゲーム状態 |
| `timeLimit` | `number` | ゲームの制限時間（秒） |
| `timeLeft` | `number` | 残り時間（秒） |
| `activePlate` | `PlateProgress \| null` | 現在タイピング中の皿 |
| `upcomingPlates` | `SushiPlate[]` | 次に登場する皿の配列 |
| `completedPlates` | `CompletedPlate[]` | 完成した皿の配列 |
| `metrics` | `GameMetrics` | ゲーム成績情報 |
| `startedAt` | `number \| null` | ゲーム開始時刻（タイムスタンプ） |

### TypingGameControls

```typescript
interface TypingGameControls {
  start: () => void;
  restart: () => void;
}
```

ゲーム制御メソッドを定義するインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `start` | `() => void` | ゲーム開始メソッド |
| `restart` | `() => void` | ゲーム再開始メソッド |

### TypingGameOptions

```typescript
interface TypingGameOptions {
  timeLimit?: number;
  laneSize?: number;
}
```

`useTypingGame` フックが受け取るオプションを定義するインターフェースです。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `timeLimit` | `number` | ゲームの制限時間（秒）。デフォルト: 60秒 |
| `laneSize` | `number` | レーン内の皿数。デフォルト: 3枚 |

#### 使用例

```typescript
// デフォルト設定（制限時間60秒、レーン内3皿）
const game1 = useTypingGame();

// カスタム設定
const game2 = useTypingGame({
  timeLimit: 120,  // 2分間
  laneSize: 5      // 5皿表示
});
```

### TypingGameValue

```typescript
interface TypingGameValue extends GameState, TypingGameControls {
  handleKeyInput: (key: string) => void;
}
```

`useTypingGame` フックが返す完全な値の型です。`GameState` と `TypingGameControls` を継承し、追加のメソッドを提供します。

| プロパティ | 型 | 説明 |
|------------|-----|------|
| `handleKeyInput` | `(key: string) => void` | キー入力処理メソッド |

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

詳細な型定義については、[TypingGameValue](#typinggamevalue) セクションを参照してください。

#### 実装例：シンプルなゲームコンポーネント

```typescript
import React, { useEffect } from 'react';
import { useTypingGame } from '../game/useTypingGame';

function SimpleGame() {
  const game = useTypingGame({ timeLimit: 60, laneSize: 3 });

  // キーボードイベントのリスナー設定
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (game.status === 'running' && event.key.length === 1) {
        game.handleKeyInput(event.key);
      } else if (game.status === 'idle' && event.key === ' ') {
        game.start();
      } else if (game.status === 'finished' && event.key === ' ') {
        game.restart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [game]);

  return (
    <div>
      <h1>寿司打クローン</h1>

      {/* スコア表示 */}
      <div>
        <p>スコア: {game.metrics.score}</p>
        <p>残り時間: {game.timeLeft}秒</p>
        <p>コンボ: {game.metrics.combo}</p>
        <p>獲得金額: {game.metrics.coins}円</p>
      </div>

      {/* ゲーム状態別表示 */}
      {game.status === 'idle' && (
        <div>
          <p>スペースキーでゲーム開始</p>
        </div>
      )}

      {game.status === 'running' && game.activePlate && (
        <div>
          <h2>{game.activePlate.label}</h2>
          <p>
            <span style={{ color: 'green' }}>{game.activePlate.typed}</span>
            <span>{game.activePlate.remaining}</span>
          </p>
          <p>価格: {game.activePlate.price}円</p>
        </div>
      )}

      {game.status === 'finished' && (
        <div>
          <h2>ゲーム終了</h2>
          <p>最終スコア: {game.metrics.score}</p>
          <p>最大コンボ: {game.metrics.maxCombo}</p>
          <p>総獲得金額: {game.metrics.coins}円</p>
          <p>スペースキーで再スタート</p>
        </div>
      )}
    </div>
  );
}

export default SimpleGame;
```

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

## データ

### 寿司皿データ

```typescript
import { sushiPlates } from './game/data/plates';
```

利用可能な寿司皿データは `src/game/data/plates.ts` で定義されています。現在24種類の寿司ネタが含まれています：

- まぐろ (maguro) - 100円
- えび (ebi) - 90円
- いか (ika) - 80円
- あなご (anago) - 120円
- うに (uni) - 200円
- いくら (ikura) - 150円
- はまち (hamachi) - 110円
- サーモン (saamon) - 130円
- 玉子 (tamago) - 70円
- かっぱ巻き (kappamaki) - 60円
- その他14種類...

## ユーティリティ関数

### createPlateProgress

```typescript
function createPlateProgress(plate: SushiPlate): PlateProgress
```

`SushiPlate` から `PlateProgress` オブジェクトを作成します。初期値として以下を設定：
- `typed`: 空文字列
- `remaining`: 皿の `reading` プロパティ
- `mistakes`: 0

#### 使用例

```typescript
const plate = { id: 'maguro', label: 'まぐろ', reading: 'maguro', price: 100 };
const progress = createPlateProgress(plate);
// progress = { ...plate, typed: '', remaining: 'maguro', mistakes: 0 }
```

### pickRandomPlate

```typescript
function pickRandomPlate(excludeId?: string): SushiPlate
```

ランダムに寿司皿を選択します。`excludeId` が指定された場合、その ID の皿は除外されます。

#### 使用例

```typescript
const randomPlate = pickRandomPlate();
const anotherPlate = pickRandomPlate('maguro'); // まぐろ以外からランダム選択
```

## スコア計算

### 正確なタイピング

- 基本スコア: `CHAR_SCORE + combo` (10 + コンボ数)
- 皿完成ボーナス: `PLATE_BONUS` (50ポイント)
- コンボは連続して正しくタイプした文字数

#### 例
「maguro」をコンボ0からタイプした場合：
- 'm' → 10 + 1 = 11ポイント
- 'a' → 10 + 2 = 12ポイント
- 'g' → 10 + 3 = 13ポイント
- 'u' → 10 + 4 = 14ポイント
- 'r' → 10 + 5 = 15ポイント
- 'o' → 10 + 6 = 16ポイント
- 皿完成ボーナス → 50ポイント
- 合計：131ポイント

### ミスタイピング

- ペナルティ: `MISTAKE_PENALTY` (5ポイントマイナス)
- コンボはリセットされる
- スコアは0未満にはならない

### 金額計算

完成した皿の `price` プロパティが累積されます。

#### 例
- まぐろ (100円) + えび (90円) + うに (200円) = 390円

## イベント処理

### キー入力

- 有効な文字: a-z（小文字に正規化される）
- 無効な入力は無視される
- ゲームが実行中でない場合は無視される

### タイマー

- 1秒間隔で `timeLeft` が減少
- 0になると自動的にゲーム終了
- ゲーム終了時にタイマーは停止