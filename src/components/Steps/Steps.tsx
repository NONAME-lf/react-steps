import Counter from "../Counter/Counter";
import Graph from "../Graph/Graph";
import Bar from "../Bar/Bar";
import "./style.scss";

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
  return (
    <div className="steps-component">
      <div className="info">
        <Counter
          maxSteps={maxSteps}
          currentSteps={stepData?.reduce((acc, cur) => acc + cur.steps, 0)}
        />
        <Graph stepData={stepData} />
      </div>
      <Bar stepData={stepData} />
      <a className="all-steps-link" href="#">
        ∂ All steps Now
      </a>
    </div>
  );
}
