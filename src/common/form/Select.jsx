import React from "react";

export default props => (
  <select className="form-control" {...props.select} readOnly={props.readOnly}>
    {props.children}
  </select>
);
//   <input
//     {...props.input}
//     className="form-control"
//     placeholder={props.placeholder}
//     readOnly={props.readOnly}
//     type={props.type}
//   />
