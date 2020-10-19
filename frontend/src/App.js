import React from "react";
import "./App.css";
// import Client from "./components/Client/Client";
import VehiclesComponent from "./components/Vehicles/Vehicles";

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <VehiclesComponent />

      {/* <h2>Value of pi = {Math.PI}</h2>
      <h2>Value of tao = {Math.PI * 2}</h2>

      <Client firstname="Jagoda" lastname="Cubrilo" company="Regent" />
      <Client firstname="Ayman" lastname="ElTemmsahy" /> */}
    </div>
  );
}

export default App;
