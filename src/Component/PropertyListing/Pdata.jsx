import React from "react";

export function Pdata(props) {
  return (
    <small className="flex-fill text-center border-end py-2">
      <i className="fa fa-ruler-combined text-primary me-2"></i>
      {props.size}
    </small>
  );
}
