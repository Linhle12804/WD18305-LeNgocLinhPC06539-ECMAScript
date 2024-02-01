


const API_URL = "  http://localhost:3000";

const callApi = {
  async getClasses() {
    try {
      const response = await axios.get(`${API_URL}/classes`);
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  },
  async getOneClass(id) {
    try {
      const response = await axios.get(`${API_URL}/classes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  },
  async getQueryClass(params) {
    try {
      const response = await axios.get(`${API_URL}/classes`,{params});
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  },

  async addClasses(classes) {
    try {
      await axios.post(`${API_URL}/classes`, classes);
    } catch (error) {
      console.error("Error adding classes:", error);
    }
  },

  async editClasses(classesId, updatedClasses) {
    try {
     await axios.patch(`${API_URL}/classes/${classesId}`, updatedClasses);
    } catch (error) {
      console.error("Error editing classes:", error);
    }
  },

  async deleteClasses(classesId) {
    try {
      await axios.delete(`${API_URL}/classes/${classesId}`);
    } catch (error) {
      console.error("Error deleting classes:", error);
    }
  },

  async getGrades() {
    try {
      const response = await axios.get(`${API_URL}/grades`);
      return response.data;
    } catch (error) {
      console.error("Error fetching grades:", error);
    }
  },

  async addGrades(category) {
    try {
      await axios.post(`${API_URL}/grades`, category);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  },

  async editGrades(categoryId, updatedGrades) {
    console.log(updatedGrades);
    try {
      await axios.patch(`${API_URL}/grades/${categoryId}`, updatedGrades);
    } catch (error) {
      console.error("Error editing category:", error);
    }
  },

  async deleteGrades(categoryId) {
    try {
      await axios.delete(`${API_URL}/grades/${categoryId}`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  },
};

export default callApi;