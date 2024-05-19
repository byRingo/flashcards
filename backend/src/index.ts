import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

import Deck from "./models/Deck";

const app = express();
const PORT = process.env.PORT;
const DB_CONN = process.env.DB_CONN;

app.use(cors());
app.use(express.json());
app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.json(decks);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
  const deckId = req.params.deckId;
  const deletedDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deletedDeck);
});

mongoose.connect(DB_CONN).then(() => {
  app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/`);
  });
});
