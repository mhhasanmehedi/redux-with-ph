import React, { useContext } from "react";

const Child = () => {
  return (
    <div>
      <div>
        <h1>Child</h1>
        <h1>0</h1>
        <div>
          <button>Decrement</button>
          <button>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Child;
