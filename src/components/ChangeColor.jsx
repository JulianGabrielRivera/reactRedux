import React from "react";
import { useState } from "react";

export const ChangeColor = () => {
  const [color, setColor] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button>Change it</button>
    </div>
  );
};
