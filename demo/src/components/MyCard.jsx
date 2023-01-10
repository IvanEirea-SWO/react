import React from "react";
import '../styles/MyCard.css'

function MyCard() {
  return (
    <>
      <div className="card" id="myCard">
        <div className="card-body">
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default MyCard;
