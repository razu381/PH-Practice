import { createSlice } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isComplete: boolean;
  priority: "low" | "medium" | "high";
}

const initialState: { tasks: ITask[] } = {
  tasks: [
    {
      id: "#1212131",
      title: "Default task",
      description: "Default description",
      dueDate: new Date(),
      isComplete: false,
      priority: "low",
    },
    {
      id: "#1211",
      title: "Merge on github",
      description: "Please merge merge merge",
      dueDate: new Date(),
      isComplete: false,
      priority: "low",
    },
  ],
};

let taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
