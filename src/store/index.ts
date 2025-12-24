import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./Notification";
import postReducer from "./Post";

export const store = configureStore({
  reducer: { notification: notificationReducer, post: postReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export type AppStore = typeof store;
