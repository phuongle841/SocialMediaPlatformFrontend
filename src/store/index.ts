import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./Notification";
import postReducer from "./Post/Post";

export const store = configureStore({
  reducer: { notification: notificationReducer, post: postReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
