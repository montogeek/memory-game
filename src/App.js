import React, { useReducer } from "react";
import "./App.css";

const CARDS = [
  {
    id: 0,
    flipped: false,
    matched: false,
    color: "rebeccapurple"
  },
  {
    id: 1,
    flipped: false,
    matched: false,
    color: "red"
  },
  {
    id: 2,
    flipped: false,
    matched: false,
    color: "blue"
  },
  {
    id: 3,
    flipped: false,
    matched: false,
    color: "yellow"
  },
  {
    id: 4,
    flipped: false,
    matched: false,
    color: "green"
  },
  {
    id: 5,
    flipped: false,
    matched: false,
    color: "gray"
  },
  {
    id: 6,
    flipped: false,
    matched: false,
    color: "yellow"
  },
  {
    id: 7,
    flipped: false,
    matched: false,
    color: "blue"
  },
  {
    id: 8,
    flipped: false,
    matched: false,
    color: "red"
  },
  {
    id: 9,
    flipped: false,
    matched: false,
    color: "green"
  },
  {
    id: 10,
    flipped: false,
    matched: false,
    color: "rebeccapurple"
  },
  {
    id: 11,
    flipped: false,
    matched: false,
    color: "gray"
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "FLIP":
      const flippedCards = state.filter(card => card.flipped && !card.matched);
      const matchedCard = flippedCards.find(
        card => card.color === action.payload.color
      );

      if (matchedCard) {
        return state.map(card => {
          if (card.id === matchedCard.id || card.id === action.payload.id) {
            return {
              ...card,
              flipped: true,
              matched: true
            };
          }
          return card;
        });
      } else if (flippedCards.length > 0) {
        return state.map(card => {
          if (card.id === flippedCards[0].id) {
            return {
              ...card,
              flipped: false
            };
          }
          return card;
        });
      }

      return state.map(card => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            flipped: true
          };
        }
        return card;
      });
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, CARDS);

  return (
    <div className="App">
      {state.map((card, i) => {
        return (
          <div
            key={i}
            className="card"
            style={{ backgroundColor: card.color }}
            onClick={() => {
              if (!card.matched) {
                dispatch({
                  type: "FLIP",
                  payload: { id: card.id, color: card.color }
                });
              }
            }}
          >
            {card.flipped && "flipped"}
          </div>
        );
      })}
    </div>
  );
}

export default App;
