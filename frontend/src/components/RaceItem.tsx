import { FC } from 'react';
import { Race } from '../interfaces/IRace';
import '../css/RaceItem.css';

interface RaceItemProps {
  race: Race;
}

const imageURL = 'http://localhost:5000/images';

const RaceItem: FC<RaceItemProps> = ({ race }) => {
  return (
    <div className="card race-item">
      <div className="card-body">
        <h5 className="card-title">{race.grandPrix}</h5>
        <p className="card-text">Winner: {race.winnerName}</p>
        <p className="card-text">Time: {race.winnerTime}</p>
        <p className="card-text">Laps: {race.numberOfLaps}</p>
        <img
          src={`${imageURL}/${race.image}`}
          alt={race.grandPrix}
          className="card-img-top"
        />
      </div>
    </div>
  );
};

export default RaceItem;
