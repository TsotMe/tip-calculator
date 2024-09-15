import { useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import ResetButton from "./components/ResetButton";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = ((percentage1 + percentage2) / 2 / 100) * bill;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />

      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        <span>How did you like the service?</span>
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      {bill !== "" && (
        <>
          <h2>
            You pay ${bill + tip} (${bill} + ${tip}) tip
          </h2>
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}
