import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../users/userSlice";

export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isComplete: boolean;
  priority: "low" | "medium" | "high";
  assignTo: string | null;
}

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;

const initialState: {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
} = {
  tasks: [
    {
      id: "#1212131",
      title: "Default task",
      description: "Default description",
      dueDate: new Date(),
      isComplete: false,
      priority: "low",
      assignTo: "romanrahim@gmail.com",
    },
    {
      id: "#1211",
      title: "Merge on github",
      description: "Please merge merge merge",
      dueDate: new Date(),
      isComplete: false,
      priority: "high",
      assignTo: null,
    },
  ],
  filter: "all",
};

function createTask(task: DraftTask): ITask {
  let id = uuidv4();
  return {
    id,
    isComplete: false,
    ...task,
  };
}

let taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      let tasks = createTask(action.payload);
      state.tasks.push(tasks);
    },
    toggleComplete: (state, action) => {
      let itemToChange = state.tasks.find((task) => task.id === action.payload);

      if (itemToChange) {
        itemToChange.isComplete = !itemToChange.isComplete;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      let deletedUsersTaks = state.tasks.filter(
        (task) => task.assignTo === action.payload
      );
      deletedUsersTaks.map((task) => (task.assignTo = null));
    });
  },
});

export const selectTasks = (state: RootState) => {
  const { filter, tasks } = state.todos;
  if (filter === "all") return tasks;
  return tasks.filter((task) => task.priority === filter);
};

export const { addTask, toggleComplete, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
