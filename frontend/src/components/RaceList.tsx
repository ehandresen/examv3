import { useEffect, useState } from 'react';
import RaceService from '../services/RaceService';
import { Race } from '../interfaces/IRace';
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

  const raceItem = races.map((race) => (
    <section key={race.id}>
      <RaceItem race={race} />
    </section>
  ));

  return <>{raceItem}</>;
};

export default RaceList;
