import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppSection,
  DeleteButton,
  FormSection,
  GridCell,
  GridSection,
  SubmitButton,
} from "./assets/styles.tsx";
import { Link } from "react-router-dom";

type TDeck = {
  title: string;
  _id: string;
};

export default function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState<string>("");

  const handleDeleteDeck = async (deckId: string) => {
    await axios.delete(`http://localhost:5000/decks/${deckId}`);
  };
  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/decks", {
        title: title,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
  };

  useEffect(() => {
    async function fetchDecks() {
      await axios
        .get("http://localhost:5000/decks")
        .then((response) => setDecks(response.data));
    }
    fetchDecks().catch((err) => {
      console.log(err);
    });
  }, [decks]);

  return (
    <AppSection>
      <GridSection>
        {decks.map((cur, index) => {
          return (
            <GridCell key={index}>
              <DeleteButton onClick={() => handleDeleteDeck(cur._id)}>
                X
              </DeleteButton>
              <Link to={`decks/${cur._id}`}>{cur.title}</Link>
            </GridCell>
          );
        })}
      </GridSection>
      <FormSection onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <SubmitButton>Create deck</SubmitButton>
      </FormSection>
    </AppSection>
  );
}
