import React from "react";

class VehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehicles: [] };
    this.getVehicles();

  
  }

  getVehicles() {
    const promise = fetch("http://localhost:4000/vehicles");
    promise
      .then((res) => res.json())
      .then((vehicles) => {
        this.setState({vehicles: vehicles})
      }) //  if the promise is fulfilled
      .catch((err) => console.error("promise error ", err)); // if the promise is rejected
  }

  // render is like the HTML file in Angular
  render() {
    console.log("state", this.state);
    return (
      <>
        <h2>Vehicles List</h2>
        <h2>{this.state.vehicles.length} Vehicles</h2>
        <ol>
        {
          this.state.vehicles.map((vehicle)=>(
            <li key={vehicle.vinNumber}>{vehicle.vinNumber}</li>
          ))
        }
          </ol>
      </>
    );
  }
}

export default VehiclesComponent;
