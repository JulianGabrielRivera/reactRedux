// splits login and access it in different components, it becomes organized therefore easier to understand
import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  //   functions to alter values of our application
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    // state holds info about current value, tracks it. action has payload and type, payload is an object. you can pass in info that you want to use when changing state. kind of a function that takes arguments and we use that argument to change value of variable.
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
