import React, { useState } from "react";

function Fibonacci() {
  const [number, setNumber] = useState(0);
  const [fibonacci, setFibonacci] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [seconds, setSeconds] = useState([]);

  const calculateFibonacci = (number) => {
    let fib = [0, 1];
    for (let i = 2; i <= number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setFibonacci(fib);
  };

  return (
    <div>
        
      <h1>Fibonacci secuencia</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => calculateFibonacci(number)}>
        Calcular
      </button>
      <p>{fibonacci.join(", ")}</p>
    </div>
  );
}

export default Fibonacci;