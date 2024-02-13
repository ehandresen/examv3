import { FC } from 'react';
import { Race } from '../interfaces/IRace';
import '../css/RaceItem.css';

interface RaceItemProps {
  race: Race;
}

const imageURL = 'http://localhost:5000/images';

const RaceItem: FC<RaceItemProps> = ({ race }) => {
  return (
    <div className="race-item">
      <h3>Grand Prix: {race.grandPrix}</h3>
      <p>Winner: {race.winnerName}</p>
      <p>Time: {race.winnerTime}</p>
      <p>Laps: {race.numberOfLaps}</p>
      <img src={`${imageURL}/${race.image}`} alt="" />
    </div>
  );
};

export default RaceItem;
