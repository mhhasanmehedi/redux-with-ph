import React from "react";
import { useReducer } from "react";

const Counter = () => {
  const initialState = 10;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              payload: 5,
            })
          }
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
