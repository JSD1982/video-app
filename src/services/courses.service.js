import axios from "axios";
//import { apiRoute } from "../utils/httpConfig";

const headers = {
  "Content-Type": "text/plain",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "X-Custom-Header": window.iebs_lcms.headerContent,
};

class CourseServices {
  async getTopic() {
    return await axios.get(
      `${window.iebs_lcms.apiRoute}cursos/1/temas?_embed=subtemas`,
      { headers }
    );
  }
  async getSubTopic() {
    return await axios.get(`${window.iebs_lcms.apiRoute}subtemas`, { headers });
  }
  async getCourse() {
    return await axios.get(`${window.iebs_lcms.apiRoute}cursos/1`, { headers });
  }

  async getAllNotes() {
    return await axios(`${window.iebs_lcms.apiRoute}notas`, { headers });
  }

  async getNotes(id) {
    return await axios(`${window.iebs_lcms.apiRoute}subtemas/${id}/notas`, {
      headers,
    });
  }

  async addNotes(id, addNotes) {
    return await axios.post(
      `${window.iebs_lcms.apiRoute}subtemas/${id}/notas`,
      addNotes,
      { headers }
    );
  }
  async editNotes(editNotes) {
    return await axios.put(
      `${window.iebs_lcms.apiRoute}notas/${editNotes.id}`,
      editNotes,
      { headers }
    );
  }
  async deleteNotes(id) {
    return await axios.delete(`${window.iebs_lcms.apiRoute}notas/${id}`, {
      headers,
    });
  }
  // async getViews() {
  //   return await axios(`${window.iebs_lcms.apiRoute}/vistos`);
  // }

  // async addViews(id) {
  //   return await axios.post(`${window.iebs_lcms.apiRoute}/subtemas/${id}/vistos`);
  // }
  // async getMeans(id) {
  //   return await axios.get(`${window.iebs_lcms.apiRoute}/temas/${id}/recursos`);
  // }
}

export default CourseServices;
