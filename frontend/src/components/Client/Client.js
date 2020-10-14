import React from "react";

function Client(props) {
  console.log(props);
  return (
    <>
      <h2>The client information</h2>
      <p>First name : {props.firstname}</p>
      <p>Last name : {props.lastname}</p>
      {/* if there is a value in props.company , do what is after the : && */}
      {props.company && <p>company name : {props.company.toUpperCase()}</p>}
    </>
  );
}

export default Client;
