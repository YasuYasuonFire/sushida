import { PlateProgress, SushiPlate } from '../../game/types';

interface SushiLaneProps {
  activePlate: PlateProgress | null;
  upcoming: SushiPlate[];
}

const renderReading = (plate: PlateProgress) => (
  <span className="sushi-card__reading">
    <span className="sushi-card__reading-typed">{plate.typed}</span>
    <span className="sushi-card__reading-remaining">{plate.remaining}</span>
  </span>
);

export function SushiLane({ activePlate, upcoming }: SushiLaneProps): JSX.Element {
  return (
    <section className="sushi-lane">
      {activePlate ? (
        <article className="sushi-card sushi-card--active">
          <h2 className="sushi-card__label">{activePlate.label}</h2>
          {renderReading(activePlate)}
          <span className="sushi-card__price">{activePlate.price} 円</span>
        </article>
      ) : (
        <article className="sushi-card sushi-card--placeholder">
          <p>スペースでスタート</p>
        </article>
      )}
      <div className="sushi-lane__queue">
        {upcoming.map((plate) => (
          <article key={plate.id} className="sushi-card">
            <h3 className="sushi-card__label">{plate.label}</h3>
            <span className="sushi-card__reading">{plate.reading}</span>
            <span className="sushi-card__price">{plate.price} 円</span>
          </article>
        ))}
      </div>
    </section>
  );
}
