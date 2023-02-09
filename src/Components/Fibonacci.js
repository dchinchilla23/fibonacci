import React, { useState, useEffect } from "react";
import AppDiego from "./reloj";

function FibonacciClock({minutes, seconds}) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showTime, setShowTime] = useState(true);
  const [fibonacci, setFibonacci] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateFibonacci = (number) => {
    let fib = [minutes, seconds];
    for (let i = 2; i <= number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setFibonacci(fib);
  };

  const toggleDisplay = () => {
    setShowTime(!showTime);
    if (!fibonacci.length) {
      calculateFibonacci(12);
    }
  };

  return (
    <div>
      <h1>Fibonacci Clock</h1>
      <button onClick={toggleDisplay}>Ejecutar</button>
      {showTime ? (
        <p>{time}</p>
      ) : (
        <p>{fibonacci.join(", ")}</p>
      )}
    </div>
  );
}

export default FibonacciClock;