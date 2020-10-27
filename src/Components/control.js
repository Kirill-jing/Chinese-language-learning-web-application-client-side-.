import React from "react";

let Control = (props) => {
  return <div onClick={props.clicked}>{props.label}</div>;
};

export default Control;
