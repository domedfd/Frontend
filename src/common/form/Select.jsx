import React from "react";

export default props => (
  <select {...props.select} readOnly={props.readOnly}>
    <option value="PAGO" {...(props.default ? "selected" : "")}></option>
    <option value="PENDENTE"></option>
  </select>
);
//   <input
//     {...props.input}
//     className="form-control"
//     placeholder={props.placeholder}
//     readOnly={props.readOnly}
//     type={props.type}
//   />
