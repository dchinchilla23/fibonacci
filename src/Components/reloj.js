import React, { useState } from "react";
import FibonacciClock from "./Fibonacci";
function AppDiego() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState([1]);

  const handleSubmit = (event) => {
    event.preventDefault();


};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Minutos:
          <input
            type="number"
            value={minutes}
            onChange={(event) => setMinutes(parseInt(event.target.value))}
          />
        </label>
        <label>
          Segundos:
          <input
            type="number"
            value={seconds}
            onChange={(event) => setSeconds(parseInt(event.target.value))}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <FibonacciClock minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default AppDiego;