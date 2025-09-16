interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps): JSX.Element {
  return (
    <section className="title-screen">
      <h2>ようこそ 寿司打 へ</h2>
      <p>次々と流れてくる寿司ネタをローマ字でタイピングして食べよう！</p>
      <ul className="title-screen__tips">
        <li>制限時間は 60 秒です。</li>
        <li>正しくタイプするとスコアが伸び、コンボで高得点を狙えます。</li>
        <li>ミスするとコンボが途切れてしまうので注意！</li>
      </ul>
      <button type="button" className="title-screen__start" onClick={onStart}>
        ゲームスタート
      </button>
      <p className="title-screen__hint">Enter または スペースキー でも開始できます。</p>
    </section>
  );
}
