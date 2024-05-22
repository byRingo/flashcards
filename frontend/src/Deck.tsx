import React, { useEffect, useState } from "react";
import {
  AppSection,
  DeleteButton,
  FormSection,
  GridCell,
  GridSection,
  SubmitButton,
} from "./assets/styles.tsx";
import { useParams } from "react-router-dom";
import { createCard } from "./api/createCard.ts";
import { getDeck } from "./api/getDeck.ts";
import { TDeck } from "./api/getDecks.ts";
import { deleteCard } from "./api/deleteCard.ts";

export default function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const handleDeleteCard = async (index: number) => {
    if (!deckId) return;
    const newCards = await deleteCard(deckId, index);
    setCards(newCards.cards);
  };
  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const { cards: allCards } = await createCard(deckId!, text);
    setCards(allCards);
    setText("");
  };

  useEffect(() => {
    if (!deckId) return;
    async function fetchDeck() {
      const newDeck = await getDeck(deckId!);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
    fetchDeck().catch((err) => {
      console.log(err);
    });
  }, [deckId]);

  return (
    <AppSection>
      {JSON.stringify(deck?.title)}
      <GridSection>
        {cards.map((cur, index) => {
          return (
            <GridCell key={index}>
              <DeleteButton onClick={() => handleDeleteCard(index)}>
                X
              </DeleteButton>
              <p>{cur}</p>
            </GridCell>
          );
        })}
      </GridSection>
      <FormSection onSubmit={handleCreateCard}>
        <label htmlFor="card-title">Card Text</label>
        <input
          id="card-title"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <SubmitButton>Create Card</SubmitButton>
      </FormSection>
    </AppSection>
  );
}
