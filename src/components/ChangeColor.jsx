import React from "react";
import { useState } from "react";
// modifies state
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

export const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change it</button>
    </div>
  );
};
