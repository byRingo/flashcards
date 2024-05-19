import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

type TDeck = {
  title: string;
  _id: string;
};

const GridSection = styled.div`
  display: grid;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 800px;
`;

const GridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1.5em;
  font-weight: 500;
`;

export default function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState<string>("");

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
    <>
      <GridSection>
        {decks.map((cur, index) => {
          return <GridCell key={index}>{cur.title}</GridCell>;
        })}
      </GridSection>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create deck</button>
      </form>
    </>
  );
}
