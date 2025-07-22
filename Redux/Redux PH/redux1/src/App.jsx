import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterTest from "./test files/CounterTest";
import UserForm from "./test files/UserForm";
import CounterReducerPractice from "./test files/CounterReducerPractice";
import ToggleVisibilityReducerPractice from "./test files/ToggleVisibilityReducerPractice";
import TodoReducerPractice from "./test files/TodoReducerPractice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TodoReducerPractice />
      <ToggleVisibilityReducerPractice />
      <CounterReducerPractice />;
    </div>
  );
}

export default App;
