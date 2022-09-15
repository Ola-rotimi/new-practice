import React from "react";

function Entry(props) {
  return (
    <div className="car-card">
      <h3>{props.brand}</h3>
      <img src={props.imgURL} height="200px" width="300px" />
      <p>{props.model}</p>
      <p>{props.year}</p>
    </div>
  );
}

export default Entry;
