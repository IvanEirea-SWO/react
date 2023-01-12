import React from "react";

function myFunction(input) {
  return input;
}

function FunctionComponent() {
  return (
    <h3>Function: { myFunction("This is an input") }</h3>
  )
}

export default FunctionComponent;
