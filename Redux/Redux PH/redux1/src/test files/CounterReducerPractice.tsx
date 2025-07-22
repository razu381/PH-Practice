import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  reset,
} from "../redux/features/counter/counterSlice";
import { useAppSelector } from "../redux/hooks";

function CounterReducerPractice() {
  let dispatch = useDispatch();
  let { count } = useAppSelector((state) => state.counter);

  function handleIncrease(count: number) {
    dispatch(increase(5));
  }
  function handleDecrease() {
    dispatch(decrease());
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl shadow-lg p-8 mx-auto max-w-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 drop-shadow">
        Counter
      </h1>
      <div className="text-6xl font-extrabold text-blue-900 mb-8 bg-white rounded-full shadow px-8 py-4 border-2 border-blue-300">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleIncrease(5)}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Increment
        </button>
        <button
          onClick={handleDecrease}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterReducerPractice;
