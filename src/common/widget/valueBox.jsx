import React from "react";
import Grid from "../layout/gird";

export default props => {
  const valor = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG"
  }).format(props.value);

  return (
    <Grid cols={props.cols}>
      <div className={`small-box bg-${props.color}`}>
        <div className="inner">
          <h3>{props.money ? valor : props.value}</h3>
          <p>{props.text}</p>
        </div>
        <div className="icon">
          <i className={`fa fa-${props.icon}`}></i>
        </div>
      </div>
    </Grid>
  );
};
