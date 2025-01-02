import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import taskSlice from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    toDo: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type APPDispatch = typeof store.dispatch;
