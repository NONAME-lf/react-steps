import { STEP_DATA, GOAL_STEPS } from "./constants.ts";
import Steps from "./components/Steps/Steps";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Steps stepData={STEP_DATA} maxSteps={GOAL_STEPS} />
    </>
  );
}

export default App;
