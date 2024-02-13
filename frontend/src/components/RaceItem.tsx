import { FC } from 'react';
import { Race } from '../interfaces/IRace';

interface RaceItemProps {
  race: Race;
}

const RaceItem: FC<RaceItemProps> = ({ race }) => {
  return (
    <div>
      <h3>Grand Prix: {race.grandPrix}</h3>
      <p>Winner: {race.winnerName}</p>
      <p>Time: {race.winnerTime}</p>
      <p>Laps: {race.numberOfLaps}</p>
    </div>
  );
};

export default RaceItem;
