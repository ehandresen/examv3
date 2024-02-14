import axios from 'axios';

const RaceService = (() => {
  const controller = 'http://localhost:5000/api/races';

  // GET
  async function getAll() {
    const response = await axios.get(controller);

    return response.data;
  }

  // GET by id
  async function getById(id: number) {
    const response = await axios.get(`${controller}/${id}`);

    return response.data;
  }

  // GET by grandPrix
  async function getByGrandPrix(grandPrix: string) {
    try {
      const response = await axios.get(
        `${controller}/getByGrandPrix/${grandPrix}`
      );

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
