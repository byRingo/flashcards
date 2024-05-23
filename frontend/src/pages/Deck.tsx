import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TDeck } from "../api/getDecks.ts";
import { deleteCard } from "../api/deleteCard.ts";
import { createCard } from "../api/createCard.ts";
import { getDeck } from "../api/getDeck.ts";
import {
  AppSection,
  DeleteButton,
  FormSection,
  GridCell,
  GridSection,
  InputComponent,
  LabelComponent,
  SubmitButton,
} from "../assets/styles.tsx";

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
        <LabelComponent htmlFor="card-title">Card Text</LabelComponent>
        <InputComponent
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
