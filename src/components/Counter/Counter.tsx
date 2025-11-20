import { useState } from "react";
import "./style.scss";

interface CounterProps {
  maxSteps?: number;
  currentSteps?: number;

  // clientId: string;
  // recordingStatus: RecordingStatus;
  // changeRecordingStatus: (status: RecordingStatus) => void;
}

export default function Counter({ maxSteps, currentSteps }: CounterProps) {
  const maxStepsState = maxSteps;
  const currentStepsState = currentSteps;

  return (
    <div className="counter-component">
      <h2 className="counter-title">Steps</h2>
      <div className="steps">
        <span className="current-steps">{currentStepsState}</span>
        <span className="max-steps">/ {maxStepsState} steps</span>
      </div>
    </div>
  );
}
