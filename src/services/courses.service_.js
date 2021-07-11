import axios from "axios";
import { apiRoute } from "../utils/httpConfig";

const headers = {
  "Content-Type": "text/plain",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

class CourseServices {
  async getTopic() {
    return await axios.get(`${apiRoute}cursos/1/temas?_embed=subtemas`, {
      headers,
    });
  }
  async getSubTopic() {
    return await axios.get(`${apiRoute}subtemas`);
  }
  async getCourse() {
    return await axios.get(`${apiRoute}cursos/1`);
  }

  async getAllNotes() {
    return await axios(`${apiRoute}notas`);
  }

  async getNotes(id) {
    return await axios(`${apiRoute}subtemas/${id}/notas`);
  }

  async addNotes(id, addNotes) {
    return await axios.post(`${apiRoute}subtemas/${id}/notas`, addNotes);
  }
  async editNotes(editNotes) {
    return await axios.put(`${apiRoute}notas/${editNotes.id}`, editNotes);
  }
  async deleteNotes(id) {
    return await axios.delete(`${apiRoute}notas/${id}`);
  }
  // async getViews() {
  //   return await axios(`${apiRoute}/vistos`);
  // }

  // async addViews(id) {
  //   return await axios.post(`${apiRoute}/subtemas/${id}/vistos`);
  // }
  // async getMeans(id) {
  //   return await axios.get(`${apiRoute}/temas/${id}/recursos`);
  // }
}

export default CourseServices;
