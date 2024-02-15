import { useState, ChangeEvent } from 'react';
import RaceService from '../services/RaceService';

const CreateNewRace = () => {
  const [grandPrix, setGrandPrix] = useState<string>('');
  const [winnerName, setWinnerName] = useState<string>('');
  const [winnerTime, setWinnerTime] = useState<string>('');
  const [numberOfLaps, setNumberOfLaps] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'grandPrix':
        setGrandPrix(event.target.value);
        break;
      case 'winnerName':
        setWinnerName(event.target.value);
        break;
      case 'winnerTime':
        setWinnerTime(event.target.value);
        break;
      case 'numberOfLaps': {
        const numberInput = parseInt(event.target.value);

        if (!isNaN(numberInput)) {
          setNumberOfLaps(numberInput);
        }

        break;
      }
      case 'image': {
        if (event.target.files !== null) {
          setImage(event.target.files[0]);
        }
      }
    }
  }

  async function saveTeam() {
    try {
      const newTeam = {
        grandPrix: grandPrix,
        winnerName: winnerName,
        winnerTime: winnerTime,
        numberOfLaps: numberOfLaps,
        image: image?.name, //name of the file, saved as a string
      };

      if (image !== null) {
        await RaceService.createNewRace(newTeam, image);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <label htmlFor="grandPrix">Grand Prix:</label>
      <input
        type="text"
        id="grandPrix"
        name="grandPrix"
        onChange={handleChange}
      />

      <br />

      <label htmlFor="winnerName">Winner Name:</label>
      <input
        type="text"
        id="winnerName"
        name="winnerName"
        onChange={handleChange}
      />

      <br />

      <label htmlFor="winnerTime">Winner Time:</label>
      <input
        type="text"
        id="winnerTime"
        name="winnerTime"
        onChange={handleChange}
      />
      <label htmlFor="winnerTime">Please use format: '1:40:00'</label>

      <br />

      <label htmlFor="numberOfLaps">Number of Laps:</label>
      <input
        type="text"
        id="numberOfLaps"
        name="numberOfLaps"
        onChange={handleChange}
      />

      <br />

      <label htmlFor="image">Image</label>
      <input type="file" name="image" onChange={handleChange} />

      <br />

      <button onClick={saveTeam}>Save</button>
    </>
  );
};

export default CreateNewRace;
