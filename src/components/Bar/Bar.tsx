import "./style.scss";
import { type StepsProps } from "../Steps/Steps";
import { useEffect, useRef } from "react";

export default function Bar(stepsProps: StepsProps) {
  const fillBarRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);

  const { stepData = [] } = stepsProps;

  const totalSteps = stepData.reduce((acc, data) => acc + data.steps, 0);
  const percentage = Math.min((totalSteps / 8000) * 100, 100);

  window.addEventListener("resize", () => {
    const fillBarWidth = fillBarRef?.current
      ? fillBarRef?.current.offsetWidth
      : 0;
    const barWidth = barRef?.current ? barRef.current.offsetWidth : 0;
    const percWidth = percentageRef?.current
      ? percentageRef.current.offsetWidth
      : 0;

    if (barWidth - fillBarWidth < percWidth + 40) {
      percentageRef?.current?.classList.add("overflow");
    } else {
      percentageRef?.current?.classList.remove("overflow");
    }
  });

  useEffect(() => {
    const fillBarWidth = fillBarRef?.current
      ? fillBarRef?.current.offsetWidth
      : 0;
    const barWidth = barRef?.current ? barRef.current.offsetWidth : 0;
    const percWidth = percentageRef?.current
      ? percentageRef.current.offsetWidth
      : 0;

    if (barWidth - fillBarWidth < percWidth + 40) {
      percentageRef?.current?.classList.add("overflow");
    } else {
      percentageRef?.current?.classList.remove("overflow");
    }
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
