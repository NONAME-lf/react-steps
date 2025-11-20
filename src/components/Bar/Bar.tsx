import "./style.scss";
import { type StepsProps } from "../Steps/Steps";
import { useEffect, useRef } from "react";
import { GOAL_STEPS } from "../../constants";
import { togglePercentageOverflow } from "../../utils/bar";

export default function Bar({ stepData = [] }: StepsProps) {
  const fillBarRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);

  const totalSteps = stepData.reduce((acc, data) => acc + data.steps, 0);
  const percentage = Math.min((totalSteps / GOAL_STEPS) * 100, 100);

  useEffect(() => {
    togglePercentageOverflow(barRef, fillBarRef, percentageRef);

    window.addEventListener("resize", () => {
      togglePercentageOverflow(barRef, fillBarRef, percentageRef);
    });

    return () => {
      window.removeEventListener("resize", () => {
        togglePercentageOverflow(barRef, fillBarRef, percentageRef);
      });
    };
  }, [percentage]);

  return (
    <div className="growth-bar" ref={barRef}>
      <div
        className="bar-fill"
        style={{ width: `${percentage}%` }}
        ref={fillBarRef}
      >
        <span className={`percentage`} ref={percentageRef}>
          {Math.floor(percentage)}%
        </span>
      </div>
    </div>
  );
}
