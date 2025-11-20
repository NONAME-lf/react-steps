import { useState } from "react";
import "./style.scss";

interface CounterProps {
  maxSteps?: number;
  currentSteps?: number;
}

export default function Counter({ maxSteps, currentSteps }: CounterProps) {
  return (
    <div className="counter-component">
      <h2 className="counter-title">Steps</h2>
      <div className="steps">
        <span className="current-steps">{currentSteps}</span>
        <span className="max-steps">/ {maxSteps} steps</span>
      </div>
    </div>
  );
}
