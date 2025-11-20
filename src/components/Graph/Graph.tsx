import "./style.scss";
import { type StepData, type StepsProps } from "../Steps/Steps";
import { useRef } from "react";
import { GOAL_STEPS, MIN_STEP_HOURS } from "../../constants.ts";
import { getMaxProvidedHour } from "../../utils";

export default function Graph(stepsProps: StepsProps) {
  const { stepData = [] } = stepsProps;

  const maxProvidedTime = getMaxProvidedHour(stepData);

  return (
    <ul className="steps-graph">
      {stepData.map((data: StepData, index: number) => (
        <li
          key={index}
          className={`graph-bar ${data.steps === 0 ? "no-steps" : ""} ${
            new Date(data.endTime).getUTCHours() === maxProvidedTime
              ? "now"
              : ""
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
