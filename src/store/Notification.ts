import { createSlice } from "@reduxjs/toolkit";

// set notification Redux
export const notificationSlice = createSlice({
  name: "notification",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = notificationSlice.actions;
export default notificationSlice.reducer;
