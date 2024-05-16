import React, { useEffect, useState } from "react";
import axios from "axios";

type TDeck = {
  title: string;
  _id: string;
};

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
      <ul className="decks">
        {decks.map((cur, index) => {
          return <li key={index}>{cur.title}</li>;
        })}
      </ul>
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
