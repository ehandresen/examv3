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

  function getListJSX() {
    return races.map((race) => (
      <section key={race.id}>
        <RaceItem race={race} />
      </section>
    ));
  }

  return <>{getListJSX()}</>;
};

export default RaceList;
