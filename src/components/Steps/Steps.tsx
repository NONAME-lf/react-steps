import Counter from "../Counter/Counter";
import { GOAL_STEPS, MIN_STEP_HOURS } from "../../constants.ts";
import Graph from "../Graph/Graph";
import Bar from "../Bar/Bar";
import { fillToMinStepsHours } from "../../helpers.ts";
import "./style.scss";
import { useMemo } from "react";

export interface StepData {
  startTime: string;
  endTime: string;
  steps: number;
}

export interface StepsProps {
  stepData?: StepData[];
  maxSteps?: number;
}

export default function Steps({ stepData, maxSteps }: StepsProps) {
  const currentSteps = useMemo(
    () => stepData?.reduce((acc, cur) => acc + cur.steps, 0) || 0,
    [stepData]
  );

  const newStepData = fillToMinStepsHours(stepData || []);

  return (
    <div className="steps-component">
      <div className="info">
        <Counter maxSteps={maxSteps} currentSteps={currentSteps} />
        <Graph stepData={newStepData || stepData} />
      </div>
      <Bar stepData={newStepData || stepData} />
      <a className="all-steps-link" href="#">
        ∂ All steps Now
      </a>
    </div>
  );
}
