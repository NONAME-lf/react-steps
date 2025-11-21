import { STEP_DATA, GOAL_STEPS } from "./constants.ts";
import Steps from "./components/Steps/Steps";
import "./App.css";
import { useState } from "react";
import { Otp } from "./components/Otp/Otp.tsx";

function App() {
  return (
    <>
      {/* <Steps stepData={STEP_DATA} maxSteps={GOAL_STEPS} /> */}
      <Otp />
    </>
  );
}

export default App;
