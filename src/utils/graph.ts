import { type StepData } from "../components/Steps/Steps.tsx";

export function getMaxProvidedHour(stepData: StepData[]) {
  return Math.max(
    ...stepData.map(
      (data) => data.steps && new Date(data.endTime).getUTCHours()
    )
  );
}
