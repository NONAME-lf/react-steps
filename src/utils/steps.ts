import { DateTime } from "luxon";
import { type StepData } from "../components/Steps/Steps.tsx";
import { MIN_STEP_HOURS } from "../constants.ts";

export function fillToMinStepsHours(stepData: StepData[]) {
  const minDay = Math.min(
    ...stepData.map(
      (data) => DateTime.fromISO(data.startTime, { zone: "utc" }).day
    )
  );
  const maxDay = Math.max(
    ...stepData.map(
      (data) => DateTime.fromISO(data.endTime, { zone: "utc" }).day
    )
  );

  const minTime = Math.min(
    ...stepData
      .filter(
        (data) =>
          DateTime.fromISO(data.startTime, { zone: "utc" }).day === minDay
      )
      .map((data) => DateTime.fromISO(data.startTime, { zone: "utc" }).hour)
  );

  const maxTime = Math.max(
    ...stepData
      .filter(
        (data) =>
          DateTime.fromISO(data.startTime, { zone: "utc" }).day === maxDay
      )
      .map((data) => DateTime.fromISO(data.startTime, { zone: "utc" }).hour)
  );

  const currentStep = stepData.find(
    (data) =>
      DateTime.fromISO(data.startTime, { zone: "utc" }).hour === maxTime &&
      DateTime.fromISO(data.startTime, { zone: "utc" }).day === maxDay
  );
  if (currentStep) {
    currentStep.now = true;
  }

  const minMaxDif = maxTime - minTime;
  if (minMaxDif !== MIN_STEP_HOURS || maxDay - minDay) {
    const newStepData = [...stepData];

    for (let day = minDay; day <= maxDay; day++) {
      for (let hour = 0; hour < 24; hour++) {
        const exists = newStepData.find((data) => {
          const dataDate = DateTime.fromISO(data.startTime, { zone: "utc" });
          return dataDate.day === day && dataDate.hour === hour;
        });
        if (!exists) {
          const startTime = DateTime.utc(2024, day, hour, 0, 0).toISO();
          const endTime = DateTime.utc(2024, day, hour + 1, 0, 0).toISO();
          newStepData.push({
            startTime: startTime!,
            endTime: endTime!,
            steps: 0,
          });
        }
      }
    }
    newStepData.sort((a, b) => {
      const aDt = DateTime.fromISO(a.startTime, { zone: "utc" });
      const bDt = DateTime.fromISO(b.startTime, { zone: "utc" });

      if (!aDt.isValid && !bDt.isValid) return 0;
      if (!aDt.isValid) return 1;
      if (!bDt.isValid) return -1;

      const dayDiff = aDt.day - bDt.day;
      if (dayDiff !== 0) return dayDiff;
      return aDt.hour - bDt.hour;
    });

    console.log(newStepData);

    return newStepData;
  }
}
