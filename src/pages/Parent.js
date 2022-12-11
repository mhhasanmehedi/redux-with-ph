import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { setCount, count } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div>
        <div>
          <h1>Parent</h1>
          <h1>{count}</h1>
        </div>
      </div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
