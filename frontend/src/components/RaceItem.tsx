import { FC } from 'react';
import { Race } from '../interfaces/IRace';

interface RaceItemProps {
  race: Race;
}

const RaceItem: FC<RaceItemProps> = ({ race }) => {
  return (
    <div>
      <h3>{race.grandPrix}</h3>
    </div>
  );
};

export default RaceItem;
