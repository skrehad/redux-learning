import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "xQoMkMDEuStyD6k03AWQu",
      isCompleted: false,
      title: "hello",
      description: "hello",
      priority: "medium",
      dueDate: "2025-01-19T18:00:00.000Z",
      assignTo: null,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignTo: taskData.assignTo ? taskData.assignTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.toDo.filter;
  if (filter === "low") {
    return state.toDo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.toDo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.toDo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.toDo.tasks;
  }
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
