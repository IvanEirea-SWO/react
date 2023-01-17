import React from "react";

let object1 = {
    "username" : "object2",
    "email" : "object2@gmail.com"
}

function ComponenteDos({telefono}) {
  return (
    <>
    <h3>ComponenteDos works</h3>
    <h6>{ object1.username }</h6>
    <h6>{ object1.email }</h6>
    <h6>{ telefono }</h6>
    </>
  )
}

export default ComponenteDos;