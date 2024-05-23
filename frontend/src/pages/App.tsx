import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getDecks, TDeck } from "../api/getDecks.ts";
import { deleteDeck } from "../api/deleteDeck.ts";
import { createDeck } from "../api/createDeck.ts";
import {
  AppSection,
  DecksLabel,
  DeleteButton,
  FormSection,
  GridCell,
  GridSection,
  InputComponent,
  LabelComponent,
  SubmitButton,
} from "../assets/styles.tsx";

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
      <DecksLabel>Your Decks</DecksLabel>
      <GridSection>
        {decks.map((cur, index) => {
          return (
            <GridCell key={index}>
              <DeleteButton onClick={() => handleDeleteDeck(cur._id)}>
                X
              </DeleteButton>
              <Link
                to={`decks/${cur._id}`}
                style={{ color: "#7575ca", fontSize: "20px" }}
              >
                {cur.title}
              </Link>
            </GridCell>
          );
        })}
      </GridSection>
      <FormSection onSubmit={handleCreateDeck}>
        <LabelComponent htmlFor="deck-title">Deck Title</LabelComponent>
        <InputComponent
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
