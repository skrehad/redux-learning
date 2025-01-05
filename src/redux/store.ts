import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import taskSlice from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    toDo: taskSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type APPDispatch = typeof store.dispatch;
