import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const index = req.params.index;
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send("no card with this index");
  deck.cards.splice(+index, 1);
  await deck.save();
  res.json(deck);
}
