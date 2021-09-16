import React from "react";
import "./style.css";
import { Button } from "../Button";

function Card({ children, tittle, icon, color }) {
  return (
    <div className="classCar" id={color}>
      <img src={icon} alt="" />
      <div className="info">
        <h1>{tittle}</h1>

        <p>{children}</p>
      </div>
      <Button color={`button-${color}`}>Learn More</Button>
    </div>
  );
}

export { Card };
