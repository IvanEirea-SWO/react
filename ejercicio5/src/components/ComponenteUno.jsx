import React from "react";

let object1 = {
    "username" : "object1",
    "email" : "object1@gmail.com"
}

function ComponenteUno({telefono}) {
  return (
    <>
    <h3>ComponenteUno works</h3>
    <h6>{ object1.username }</h6>
    <h6>{ object1.email }</h6>
    <h6>{ telefono }</h6>
    </>
  )
}

export default ComponenteUno;
