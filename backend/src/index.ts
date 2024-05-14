import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();

import Deck from "./models/Deck";

const app = express();
const PORT = process.env.PORT;
const DB_CONN = process.env.DB_CONN;

app.use(express.json());
app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose.connect(DB_CONN).then(() => {
  app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/`);
  });
});
