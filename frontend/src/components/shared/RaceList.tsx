import { useEffect, useState } from 'react';
import RaceService from '../../services/RaceService';
import { Race } from '../../interfaces/IRace';
import RaceItem from './RaceItem';

const RaceList = () => {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    getRacesFromService();
  }, []);

  async function getRacesFromService() {
    const data = await RaceService.getAll();

    setRaces(data);
  }

  const raceItem = races.map((race) => <RaceItem key={race.id} race={race} />);

  return <div className="card-container">{raceItem}</div>;
};

export default RaceList;
