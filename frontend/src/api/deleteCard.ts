import axios from "axios";
import { API_URL } from "./config.ts";
import { TDeck } from "./getDecks.ts";

export async function deleteCard(
  deckId: string,
  index: number,
): Promise<TDeck> {
  const response = await axios.delete(
    `${API_URL}/decks/${deckId}/cards/${index}`,
  );
  return response.data;
}
