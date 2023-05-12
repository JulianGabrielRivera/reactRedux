// splits login and access it in different components, it becomes organized therefore easier to understand
import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  //   functions to alter values of our application
  reducers: {
    // state holds info about current value, tracks it. action has payload and type, payload is an object. you can pass in info that you want to use when changing state. kind of a function that takes arguments and we use that argument to change value of variable.
    login: (state, action) => {
      // change vaue of state, so we have to grab previous then change it to whatever we get from payload
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
