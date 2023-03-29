import { useState } from "react";
import Rating from "./components/Rating";
import SubmissionFeedBack from "./components/SubmissionFeedback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Rating max={6} /> */}
      <SubmissionFeedBack />
    </div>
  );
}

export default App;
