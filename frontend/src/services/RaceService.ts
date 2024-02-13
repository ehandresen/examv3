import axios from 'axios';

const RaceService = (() => {
  const controller = 'http://localhost:5000/api/races';

  async function getAll() {
    const response = await axios.get(controller);

    return response.data;
  }

  async function getById(id: number) {
    const response = await axios.get(`${controller}/${id}`);

    return response.data;
  }

  return {
    getAll,
    getById,
  };
})();

export default RaceService;
