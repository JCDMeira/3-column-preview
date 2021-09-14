import "./App.css";
import React from "react";
import { Card } from "./components/Card";
import sedan from "./assets/images/icon-sedans.svg";
import suv from "./assets/images/icon-suvs.svg";
import luxury from "./assets/images/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <div className="content">
          <Card tittle="Sedans" icon={sedan} color="orange">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </Card>
          <Card tittle="SUVs" icon={suv} color="dark">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </Card>
          <Card tittle="Luxury" icon={luxury} color="very-dark">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
