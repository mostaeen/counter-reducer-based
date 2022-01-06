import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CounterContext from "../context/CounterContext";
import Counter from "./Counter";

function Counters() {
  const { counters, resetAll } = useContext(CounterContext);
  return (
    <div>
      <Button onClick={resetAll} variant="warning m-3">
        Reset All
      </Button>
      {counters.map((c) => (
        <Counter key={c.id} counter={c} />
      ))}
    </div>
  );
}

export default Counters;
