import React, { useState } from "react";

function CounterTest() {
  let [value, setValue] = useState(0);
  let [timer, setTimer] = useState(0);

  function handleIncrease() {
    console.log(value + 1);
    setValue(value + 1);
  }

  async function handleAsync() {
    setTimer(3);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setValue((prev) => prev + 1);
          return;
        }

        return prev - 1;
      });
    }, 1000);
  }

  return (
    <div className="max-w-xs mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 border border-gray-200">
      {timer > 0 && (
        <div className="mt-2 text-blue-600 font-semibold">
          Async increment in: {timer}s
        </div>
      )}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleAsync}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          aysnc Increase
        </button>
        <span
          id="counter-value"
          className="text-2xl font-bold px-6 py-2 bg-gray-100 rounded-lg border border-gray-300"
        >
          {value}
        </span>
        <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default CounterTest;
