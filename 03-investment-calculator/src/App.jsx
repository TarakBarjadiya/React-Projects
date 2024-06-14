import { useState } from "react";

import Header from "./components/Header";
import InputArea from "./components/InputArea";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const minimumDuration = userInput.duration < 1;

  function handleInputChange(identifier, value) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [identifier]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <InputArea userInput={userInput} onChange={handleInputChange} />
      {minimumDuration && (
        <p className="center">Kindly invest for atleast 1 year</p>
      )}
      {!minimumDuration && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
