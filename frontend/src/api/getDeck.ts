import axios from "axios";
import { API_URL } from "./config.ts";
import { TDeck } from "./getDecks.ts";

export async function getDeck(deckId: string): Promise<TDeck> {
  const response = await axios.get(`${API_URL}/decks/${deckId}`);
  return response.data;
}
