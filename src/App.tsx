import { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import Rating from "./components/Rating";
import SubmissionFeedBack from "./components/SubmissionFeedback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Rating max={6} /> */}
      {/* <SubmissionFeedBack /> */}
      <Questionnaire />
    </div>
  );
}

export default App;
