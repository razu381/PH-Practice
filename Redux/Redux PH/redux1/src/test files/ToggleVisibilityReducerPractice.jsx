// Toggle Visibility
// -----------------
// Create a component with a button labeled "Show/Hide" and a message ("Hello, World!").
// Use useReducer to manage the visibility state.
// Requirements:
// - Clicking the button toggles the visibility of the message
// - The button text should change based on the current state ("Show" or "Hide")

// Start coding your solution below!
import React, { useReducer } from "react";

function ToggleVisibilityReducerPractice() {
  let initialState = {
    show: false,
    text: "",
  };
  function toggleReducer(state, action) {
    console.log(state, action.type);
    switch (action.type) {
      case "TOGGLE":
        return {
          show: !state.show,
          text: !state.show ? "Hello world" : "",
        };

      default:
        return state;
    }
  }
  let [toggle, dispatch] = useReducer(toggleReducer, initialState);
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-pink-50 to-pink-200 rounded-xl shadow-lg p-8 mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-pink-700 mb-6 drop-shadow">
        Toggle Visibility
      </h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE" })}
        className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 mb-8"
      >
        {toggle.show ? "Hide" : "Show"}
      </button>
      {/* Example static message, replace with dynamic rendering later */}
      <div className="text-xl font-medium text-pink-900 bg-white rounded-lg shadow px-6 py-4 border border-pink-200">
        {toggle.text}
      </div>
    </div>
  );
}

export default ToggleVisibilityReducerPractice;
