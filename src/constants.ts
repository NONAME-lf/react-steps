import type { StepData } from "./components/Steps/Steps";

export const STEP_DATA: StepData[] = [
  {
    startTime: "2024-11-03T08:00:00.000Z",
    endTime: "2024-11-03T09:00:00.000Z",
    steps: 100,
  },
  {
    startTime: "2024-11-03T09:00:00.000Z",
    endTime: "2024-11-03T10:00:00.000Z",
    steps: 50,
  },
  {
    startTime: "2024-11-03T10:00:00.000Z",
    endTime: "2024-11-03T11:00:00.000Z",
    steps: 200,
  },
  {
    startTime: "2024-11-03T11:00:00.000Z",
    endTime: "2024-11-03T12:00:00.000Z",
    steps: 150,
  },
  {
    startTime: "2024-11-03T12:00:00.000Z",
    endTime: "2024-11-03T13:00:00.000Z",
    steps: 2500,
  },
  {
    startTime: "2024-11-03T13:00:00.000Z",
    endTime: "2024-11-03T14:00:00.000Z",
    steps: 4500,
  },
  {
    startTime: "2024-11-04T14:00:00.000Z",
    endTime: "2024-11-04T15:00:00.000Z",
    steps: 4500,
  },
  {
    startTime: "2024-11-05T10:00:00.000Z",
    endTime: "2024-11-05T11:00:00.000Z",
    steps: 4500,
  },
];

// Parse ISO string to Date and extract hours
// Example usage:
// const dateString = "2024-11-03T08:00:00.000Z";
// const date = new Date(dateString);
// const hours = date.getHours(); // Returns 8 (in UTC)
// Or for local time: date.getUTCHours()

// To extract hours from the data:
// STEP_DATA.forEach(step => {
//   const startHour = new Date(step.startTime).getUTCHours();
//   const endHour = new Date(step.endTime).getUTCHours();
// });

export const GOAL_STEPS = 8000;
export const MIN_STEP_HOURS = 12;
export const EXAMPLE_OTP = "123321";
