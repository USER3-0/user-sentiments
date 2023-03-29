import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Rating from "./components/Rating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Rating max={6} />
    </div>
  );
}

export default App;
