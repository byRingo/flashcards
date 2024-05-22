import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

import { getDecksController } from "./controllers/getDecksController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createDeckController } from "./controllers/createDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const app = express();
const PORT = process.env.PORT;
const DB_CONN = process.env.DB_CONN;

app.use(cors());
app.use(express.json());

app.post("/decks", createDeckController);
app.get("/decks", getDecksController);
app.delete("/decks/:deckId", deleteDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.get("/decks/:deckId", getDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(DB_CONN).then(() => {
  app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}/`);
  });
});
