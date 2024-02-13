import { Race } from '../../interfaces/IRace';
import { ChangeEvent, useEffect, useState } from 'react';
import RaceService from '../../services/RaceService';
import RaceItem from '../RaceItem';

const GetById = () => {
  const [race, setRace] = useState<Race | null>(null);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    getRaceFromService();
  }, [id]);

  async function getRaceFromService() {
    try {
      const result = await RaceService.getById(id);

      setRace(result);
    } catch (error) {
      console.log(error);
      setRace(null);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const number = parseInt(event.target.value);

    setId(number);
  }

  return (
    <>
      <label htmlFor="id">Search id: </label>
      <input type="text" id="id" onChange={handleChange} />

      {race !== null ? (
        <RaceItem race={race} />
      ) : (
        <p>No race found for id: {id}</p>
      )}
    </>
  );
};

export default GetById;
