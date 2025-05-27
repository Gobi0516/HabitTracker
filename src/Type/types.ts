// types.ts
export type RootStackParamList = {

  Register: undefined;
  Login: undefined;
  AddHabit: undefined;
  HabitList:{ habits: Habit[] };
  ProgressTracker: undefined;
};

 export type Habit = {
 // Optional property for button text

 completed?: boolean; // Optional property to track completion status
  name: string;
  description: string;
  frequency: string;
};

export type BarChartData = {
  labels: string[];
  datasets: {
    data: number[];
    color?: (opacity: number) => string; // Optional color function
  }[];
};
