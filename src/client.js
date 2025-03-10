import axios from "axios";
import TcgClient from "./games/tcg";

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

  async fetchTcgByIdentifier(identifier) {
    if (this.client.hasOwnProperty("getTcgByIdentifier")) {
      return await this.client.getTcgByIdentifier(identifier);
    } else {
      throw new Error(this.notImplemented);
    }
  }
}
