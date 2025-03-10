import axios from "axios";

class TcgClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/v1/tcg";
  }

  // Fetches all TCG games in the API
  async getAllTcg() {
    try {
      const response = await axios.get(`${this.baseUrl}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching TCGs: ${error.message}`);
      return { error: "Failed to fetch TCGs" };
    }
  }

  // Fetches a specific TCG game by its identifier
  async getTcgByIdentifier(identifier) {
    try {
      const response = await axios.get(`${this.baseUrl}/${identifier}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching TCG by identifier: ${error.message}`);
      return { error: "Failed to fetch TCG by identifier" };
    }
  }
}

export default TcgClient