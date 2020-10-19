import React from "react";
import Table from "react-bootstrap/Table";

class VehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehicles: [] }; //empty list
    this.getVehicles();
  }

  getVehicles() {
    const promise = fetch("http://localhost:4000/vehicles");

    promise
      .then((res) => res.json())
      .then((vehicles) => {
        //list from the backend
        this.updateVehicles(vehicles);
      }) //  if the promise is fulfilled
      .catch((err) => console.error("promise error ", err)); // if the promise is rejected
  }

  updateVehicles(vehiclesList) {
    const newState = { vehicles: vehiclesList };
    this.setState(newState);
  }

  // render is like the HTML file in Angular
  render() {
    console.log("state", this.state);
    return (
      <>
        <h2>Vehicles List</h2>
        <h2>{this.state.vehicles.length} Vehicles</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Vin Number</th>
              <th>Registration Number</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicles.map((vehicle) => (
              <tr key={vehicle.vinNumber}>
                <td>{vehicle.vinNumber}</td>
                <td>{vehicle.regNumber}</td>
                <td>{vehicle.owner}</td>
                <td>{vehicle.isOnline ?  'online' : 'offline'  }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default VehiclesComponent;
