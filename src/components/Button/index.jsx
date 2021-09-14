import React from "react";
import "./style.css";

function Button({ children, color }) {
  return <button id={color}>{children}</button>;
}

export { Button };
