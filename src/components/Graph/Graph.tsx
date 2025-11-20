import "./style.scss";
import { DateTime, Duration, Interval } from "luxon";
import { type StepData, type StepsProps } from "../Steps/Steps";
import { useRef } from "react";
import { GOAL_STEPS, MIN_STEP_HOURS } from "../../constants.ts";

export default function Graph(stepsProps: StepsProps) {
  const { stepData = [] } = stepsProps;

  return (
    <ul className="steps-graph">
      {stepData.map((data: StepData, index: number) => (
        <li
          key={index}
          className={`graph-bar ${data.steps === 0 ? "no-steps" : ""} ${
            data.now ? "now" : ""
          }`}
          style={
            data.steps === 0
              ? {}
              : {
                  height: `${(data.steps / GOAL_STEPS) * 250}%`,
                }
          }
        ></li>
      ))}
    </ul>
  );
}
