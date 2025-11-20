import "./style.scss";
import { type StepData, type StepsProps } from "../Steps/Steps";
import { useRef } from "react";
import { STEP_HOURS } from "../../constants";

export default function Graph(stepsProps: StepsProps) {
  const { stepData = [] } = stepsProps;

  let checkForNow: (data: any) => void = (data) => {
    if (
      new Date(data.endTime).getUTCHours() < new Date().getUTCHours() &&
      new Date(data.startTime).getUTCHours() < new Date().getUTCHours()
    ) {
    }
  };

  const minTime = Math.min(
    ...stepData.map((data) => new Date(data.startTime).getUTCHours())
  );
  const maxTime = Math.max(
    ...stepData.map((data) => new Date(data.endTime).getUTCHours())
  );
  const constMax = useRef(maxTime).current;
  const maxTimeDate = stepData.find(
    (data) => new Date(data.endTime).getUTCHours() === maxTime
  );
  const minMaxDif = maxTime - minTime;

  if (minMaxDif !== STEP_HOURS) {
    for (let i = 0; i < STEP_HOURS - minMaxDif; i++) {
      const newStartDate = maxTimeDate
        ? new Date(maxTimeDate.endTime)
        : new Date();
      newStartDate.setHours(newStartDate.getHours() + i);

      const newEndDate = maxTimeDate
        ? new Date(maxTimeDate.endTime)
        : new Date();
      newEndDate.setHours(newEndDate.getHours() + (i + 1));

      stepData.push({
        startTime: maxTimeDate ? newStartDate.toISOString() : "",
        endTime: maxTimeDate ? newEndDate.toISOString() : "",
        steps: 0,
      });
    }
  }

  return (
    <ul className="steps-graph">
      {stepData.map((data: StepData, index: number) => (
        <li
          key={index}
          className={`graph-bar ${data.steps === 0 ? "no-steps" : ""} ${
            new Date(data.endTime).getUTCHours() === constMax ? "now" : ""
          }`}
          style={
            data.steps === 0
              ? {}
              : {
                  height: `${(data.steps / 8000) * 1000}%`,
                }
          }
        ></li>
      ))}
    </ul>
  );
}
