import axios from 'axios';

const RaceService = (() => {
  const controller = 'http://localhost:5000/api/races';

  async function getAll() {
    const result = await axios.get(controller);

    return result.data;
  }

  return {
    getAll,
  };
})();

export default RaceService;
