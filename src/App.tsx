import { STEP_DATA, MAX_STEPS } from "./constants";
import Steps from "./components/Steps/Steps";
import "./App.css";
import { useState } from "react";

function App() {
  const [totalSteps, setTotalSteps] = useState(0);

  return (
    <>
      <Steps stepData={STEP_DATA} maxSteps={MAX_STEPS} />
    </>
  );
}

export default App;
