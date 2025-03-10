import axios from "axios";
import TcgClient from "./games/tcg";
import PokemonTcgClient from "./games/pokemon";

class CardNexusClient {
  constructor(game) {
    this.notImplemented = "This method is not supported for the selected game.";
    switch (game) {
      case "tcg":
        this.client = new TcgClient();
        break;
      case "pokemon":
        this.client = new PokemonTcgClient();
        break;
      default:
        throw new Error("Invalid game selection.");
    }
  }

  // Fetches all TCG games
  async fetchAllTcg() {
    if (this.client.hasOwnProperty("getAllTcg")) {
      return await this.client.getAllTcg();
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches a specific TCG game by its identifier
  async fetchTcgByIdentifier(identifier) {
    if (this.client.hasOwnProperty("getTcgByIdentifier")) {
      return await this.client.getTcgByIdentifier(identifier);
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches all pokemon eras
  async fetchAllEras() {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getAllEras")
    ) {
      return await this.client.getAllEras();
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches a specific pokemon era by its identifier (either id or slug)
  async fetchEraByIdentifier(identifier) {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getEraByIdentifier")
    ) {
      return await this.client.getEraByIdentifier(identifier);
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches all sets, with optional filtering by era and name, and optional sorting by release date
  async fetchAllSets(era = null, name = null, sort = null, order = null) {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getAllSets")
    ) {
      return await this.client.getAllSets(era, name, sort, order);
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches a specific set by its identifier (either id or slug)
  async fetchSetByIdentifier(identifier) {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getSetByIdentifier")
    ) {
      return await this.client.getSetByIdentifier(identifier);
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches all cards, with optional filters and pagination (limit/offset)
  async fetchAllCards(limit = 20, offset = 0, filters = null) {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getAllCards")
    ) {
      return await this.client.getAllCards(limit, offset, filters);
    } else {
      throw new Error(this.notImplemented);
    }
  }

  // Fetches a specific card by its identifier (either id or slug)
  async fetchCardByIdentifier(identifier) {
    if (
      this.client instanceof PokemonTcgClient &&
      this.client.hasOwnProperty("getCardByIdentifier")
    ) {
      return await this.client.getCardByIdentifier(identifier);
    } else {
      throw new Error(this.notImplemented);
    }
  }
}
