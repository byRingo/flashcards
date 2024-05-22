import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createCardForDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  console.log(deckId);
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send("no deck with this id exists");
  const { text } = req.body;
  deck.cards.push(text);
  await deck.save();
  res.json(deck);
}
