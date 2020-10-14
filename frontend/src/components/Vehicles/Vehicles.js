import React from "react";

class VehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.client = "scania";
  }

  getClient() {
    return "scania";
  }

  // render is like the HTML file in Angular
  render() {
    return (
      <>
        <h2>Vehicles List</h2>
        <p>{this.getClient()}</p>

        <p>{this.client}</p>
      </>
    );
  }
}

export default VehiclesComponent;
