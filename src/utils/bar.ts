import { type StepData } from "../components/Steps/Steps.tsx";

export function togglePercentageOverflow(
  mainBarRef: React.RefObject<HTMLDivElement | null>,
  fillBarRef: React.RefObject<HTMLDivElement | null>,
  percentageRef: React.RefObject<HTMLSpanElement | null>
) {
  const fillBarWidth = fillBarRef?.current
    ? fillBarRef?.current.offsetWidth
    : 0;
  const barWidth = mainBarRef?.current ? mainBarRef.current.offsetWidth : 0;
  const percWidth = percentageRef?.current
    ? percentageRef.current.offsetWidth
    : 0;

  if (barWidth - fillBarWidth < percWidth + 40) {
    percentageRef?.current?.classList.add("overflow");
  } else {
    percentageRef?.current?.classList.remove("overflow");
  }
}
