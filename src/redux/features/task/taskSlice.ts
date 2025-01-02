import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
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
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
