import axios from "axios";
import { API_URL } from "./config.ts";

export async function createCard(deckId: string, text: string) {
  const response = await axios.post(`${API_URL}/decks/${deckId}/cards`, {
    text: text,
  });
  return response.data;
}
