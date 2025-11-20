import { type StepData } from "./components/Steps/Steps.tsx";
import { MIN_STEP_HOURS } from "./constants.ts";

export function fillToMinStepsHours(stepData: StepData[]) {
  const minTime = Math.min(
    ...stepData.map((data) => new Date(data.startTime).getUTCHours())
  );
  const maxTime = Math.max(
    ...stepData.map((data) => new Date(data.endTime).getUTCHours())
  );

  const maxTimeDate = stepData.find(
    (data) => new Date(data.endTime).getUTCHours() === maxTime
  );
  const minMaxDif = maxTime - minTime;
  if (minMaxDif !== MIN_STEP_HOURS) {
    const newStepData = [...stepData];
    for (let i = 0; i < MIN_STEP_HOURS - minMaxDif; i++) {
      const newStartDate = maxTimeDate
        ? new Date(maxTimeDate.endTime)
        : new Date();
      newStartDate.setHours(newStartDate.getHours() + i);

      const newEndDate = maxTimeDate
        ? new Date(maxTimeDate.endTime)
        : new Date();
      newEndDate.setHours(newEndDate.getHours() + (i + 1));

      newStepData.push({
        startTime: maxTimeDate ? newStartDate.toISOString() : "",
        endTime: maxTimeDate ? newEndDate.toISOString() : "",
        steps: 0,
      });
    }
    return newStepData;
  }
}

export function getMaxProvidedHour(stepData: StepData[]) {
  return Math.max(
    ...stepData.map(
      (data) => data.steps && new Date(data.endTime).getUTCHours()
    )
  );
}

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
