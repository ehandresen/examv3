import axios from 'axios';
import { Race } from '../interfaces/IRace';

const RaceService = (() => {
  const controller = 'http://localhost:5000/api/races';
  const imageUploadController = 'http://localhost:5000/api/ImageUpload';

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
        `${controller}/GetByGrandPrix/${grandPrix}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  // POST
  // we save the new race, and the image file attached to the object
  async function createNewRace(newRace: Race, image: File) {
    try {
      /* 
        For at IFormFile i ImageUploadController skal kunne ta imot bildet,
        må bildet bli pakket inn i et eget type objekt (JS FormData() objektet)
        Man kan ikke bare sende bildet uten videre 
      */
      await axios.post(controller, newRace);

      // under starter behandling av selve bildet
      const formData = new FormData();
      formData.append('formFile', image); // VIKTIG moment her at 'formFile' skal matche med 'formFile' i backend kontroller

      // siste steg, sende bildet til web api'et
      const uploadResult = await axios({
        url: imageUploadController,
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(uploadResult);

      //* HUSK DENNE
      // Vi må kvitte oss med forrige objektet, for så å kunne legge inn et nytt
      // Denne koden lever konstant under applikasjonen, mens bruker driver å laster opp bilder ogsånt
      formData.delete('formFile');
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getAll,
    getById,
    getByGrandPrix,
    createNewRace,
  };
})();

export default RaceService;
