import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterTest from "./test files/CounterTest";
import UserForm from "./test files/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return <UserForm />;
}

export default App;
