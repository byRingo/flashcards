import axios from "axios";
import { API_URL } from "./config.ts";

export type TDeck = {
  title: string;
  _id: string;
};

export async function getDecks(): Promise<TDeck[]> {
  const response = await axios.get(`${API_URL}/decks`);
  return response.data;
}
