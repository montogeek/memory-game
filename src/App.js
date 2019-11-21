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
      const flippedCards = state.filter(card => card.flipped);
      const matchedCard = flippedCards.find(
        card => card.color === action.payload.color
      );

      if (matchedCard) {
        return state.map(card => {
          if (card.id === matchedCard.id || card.id === action.payload.id) {
            return {
              ...card,
              flipped: true
            };
          }
          return card;
        });
      } else {
        // return state.map(card => {
        //   if (card.id === action.payload.id) {
        //     return {
        //       ...card,
        //       flipped: false
        //     };
        //   }
        //   return card;
        // });
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
              dispatch({
                type: "FLIP",
                payload: { id: card.id, color: card.color }
              });
            }}
          >
            {card.flipped && "flipped"}
          </div>
        );
      })}
      {/* {Array.from({ length: 4 }, (_, x) => x).map(column => {
        return (
          <div key={column}>
            {Array.from({ length: 3 }, (_, x) => x).map(row => {
              return (
                <div key={row} className="card">
                  {row}
                </div>
              );
            })}
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
