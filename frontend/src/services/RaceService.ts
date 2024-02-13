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

  //TODO
  async function getByGrandPrix(grandPrix: string) {
    try {
      const response = await axios.get(`${controller}/${grandPrix}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getAll,
    getById,
    getByGrandPrix,
  };
})();

export default RaceService;
