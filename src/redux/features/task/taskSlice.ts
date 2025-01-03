import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "12345",
      title: "frontend",
      description: "create home page",
      dueDate: "2025-1-5",
      isComplete: false,
      priority: "High",
    },
    {
      id: "4567",
      title: "frontend",
      description: "create blog page",
      dueDate: "2025-1-10",
      isComplete: false,
      priority: "Low",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.toDo.tasks;
};

export default taskSlice.reducer;
