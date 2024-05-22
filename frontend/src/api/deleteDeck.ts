import axios from "axios";
import { API_URL } from "./config.ts";

export async function deleteDeck(deckId: string) {
  return axios.delete(`${API_URL}/decks/${deckId}`);
}
