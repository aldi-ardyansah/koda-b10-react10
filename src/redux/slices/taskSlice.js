import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const taskSlice = createSlice({
  name: "tasks",
  initialState: data.tasks,
  reducers: {
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { toggleTask } = taskSlice.actions;
export default taskSlice.reducer;