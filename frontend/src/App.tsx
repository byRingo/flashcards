import React, { useEffect, useState } from "react";
import {
  AppSection,
  DeleteButton,
  FormSection,
  GridCell,
  GridSection,
  SubmitButton,
} from "./assets/styles.tsx";
import { Link } from "react-router-dom";
import { getDecks, TDeck } from "./api/getDecks.ts";
import { createDeck } from "./api/createDeck.ts";
import { deleteDeck } from "./api/deleteDeck.ts";

export default function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState<string>("");

  const handleDeleteDeck = async (deckId: string) => {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  };
  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDeck = await createDeck(title).catch((err) => {
      console.log(err);
    });
    setDecks([...decks, newDeck]);
    setTitle("");
  };

  useEffect(() => {
    async function fetchDecks() {
      const newDeck = await getDecks();
      setDecks(newDeck);
    }
    fetchDecks().catch((err) => {
      console.log(err);
    });
  }, []);

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
