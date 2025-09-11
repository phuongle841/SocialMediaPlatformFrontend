import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./Notification";

export const store = configureStore({
  reducer: { notification: notificationReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export type AppStore = typeof store;
