import React from "react";
import { useState } from "react";
// usedispatch to modify values of our states.
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Julian", age: 30, email: "none" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
