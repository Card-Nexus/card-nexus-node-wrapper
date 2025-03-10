import axios from "axios";

class PokemonTcgClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/v1/pokemon";
  }

  // Fetches all Pokemon TCG eras
  async getAllEras() {
    try {
      const response = await axios.get(`${this.baseUrl}/eras`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching eras: ${error.message}`);
      return { error: "Failed to fetch all eras" };
    }
  }

  // Fetches a specific era by its identifier (either id or slug)
  async getEraByIdentifier(identifier) {
    try {
      const response = await axios.get(`${this.baseUrl}/eras/${identifier}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching era by identifier: ${error.message}`);
      return { error: "Failed to fetch era by identifier" };
    }
  }

  // Fetches all sets, with optional filtering by era and name, and optional sorting by release date
  async getAllSets(era = null, name = null, sort = null, order = null) {
    const params = {};
    if (era) params.era = era;
    if (name) params.name = name;
    if (sort) params.sort = sort;
    if (order) params.order = order;

    try {
      const response = await axios.get(`${this.baseUrl}/sets`, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching sets: ${error.message}`);
      return { error: "Failed to fetch sets" };
    }
  }

  // Fetches a specific set by its identifier (either id or slug)
  async getSetByIdentifier(identifier) {
    try {
      const response = await axios.get(`${this.baseUrl}/sets/${identifier}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching set by identifier: ${error.message}`);
      return { error: "Failed to fetch set by identifier" };
    }
  }

  // Fetches all cards, with optional filters and pagination (limit/offset)
  async getAllCards(limit = 20, offset = 0, filters = null) {
    const params = {
      limit,
      offset,
      ...filters,
    };

    try {
      const response = await axios.get(`${this.baseUrl}/cards`, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching cards: ${error.message}`);
      return { error: "Failed to fetch cards" };
    }
  }

  // Fetches a specific card by its identifier (either id or slug)
  async getCardByIdentifier(identifier) {
    try {
      const response = await axios.get(`${this.baseUrl}/cards/${identifier}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching card by identifier: ${error.message}`);
      return { error: "Failed to fetch card by identifier" };
    }
  }
}

export default PokemonTcgClient;
