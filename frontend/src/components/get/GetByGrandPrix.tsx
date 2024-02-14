import { useState, useEffect, ChangeEvent } from 'react';
import RaceService from '../../services/RaceService';
import { Race } from '../../interfaces/IRace';
import RaceItem from '../RaceItem';

const GetByGrandPrix = () => {
  const [input, setInput] = useState<string>('');
  const [race, setRace] = useState<Race | null>(null);

  useEffect(() => {
    getRaceFromService();
  }, [input]);

  async function getRaceFromService() {
    try {
      const result = await RaceService.getByGrandPrix(input);

      // Check if result is not undefined (i.e., race is found)
      if (result !== undefined) {
        setRace(result);
      } else {
        // If no race is found, set race to null
        setRace(null);
      }
    } catch (error) {
      console.log(error);
      setRace(null);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search grand prix:</label>
      <input type="text" id="search" onChange={handleChange} />

      {race !== null ? (
        <div className="card-container">
          <RaceItem key={race.id} race={race} />
        </div>
      ) : (
        <p>{input !== '' && `Race containing "${input}" found`}</p>
      )}
    </>
  );
};

export default GetByGrandPrix;
