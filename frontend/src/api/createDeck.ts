import axios from "axios";
import { API_URL } from "./config.ts";

export async function createDeck(title: string) {
  const response = await axios.post(`${API_URL}/decks`, {
    title: title,
  });
  return response.data;
}
