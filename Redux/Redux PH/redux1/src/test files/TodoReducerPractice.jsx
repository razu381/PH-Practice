// Simple Todo List
// ----------------
// Create a component with an input field and an "Add" button.
// Use useReducer to manage an array of todo items.
// Requirements:
// - Typing in the input and clicking "Add" adds the item to the list
// - Display the list of todos below the input
// - Add a "Remove" button next to each todo to delete it from the list

// Start coding your solution below!
import React, { useReducer } from "react";

function TodoReducerPractice() {
  let [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        let idx = action.payload;
        let newTasks = state.filter((_, i) => i !== idx);
        return newTasks;
      default:
        return state;
    }
  }, []);

  function handleTaskAdd(e) {
    e.preventDefault();
    let task = e.target.task.value;
    dispatch({
      type: "ADD",
      payload: task,
    });
    e.target.task.value = "";
  }

  function handleDelete(idx) {
    dispatch({
      type: "DELETE",
      payload: idx,
    });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-purple-50 to-purple-200 rounded-xl shadow-lg p-8 mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-purple-700 mb-6 drop-shadow">
        Todo List
      </h1>
      <div className="flex w-full gap-2 mb-6">
        <form onSubmit={handleTaskAdd} className="w-full">
          <input
            type="text"
            name="task"
            className="mr-2 px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800"
            placeholder="Enter a todo..."
          />
          <button
            type="submit"
            className=" px-5 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Add
          </button>
        </form>
      </div>
      <ul className="w-full space-y-3">
        {todos.map((task, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between bg-white rounded-lg shadow px-4 py-2 border border-purple-200"
          >
            <span className="text-gray-800">{task}</span>
            <button
              onClick={() => handleDelete(idx)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducerPractice;
