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
    addTask: (state, action) => {
      state.push({
        id: state.length ? Math.max(...state.map((task) => task.id)) + 1 : 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { toggleTask, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;