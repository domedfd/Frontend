import React from "react";
import Grid from "../layout/gird";

export default props => (
  <Grid cols={props.cols}>
    {console.log(
      new Intl.NumberFormat("es-PY", {
        style: "currency",
        currency: "PYG"
      }).format(props.value)
    )}
    <div className={`small-box bg-${props.color}`}>
      <div className="inner">
        <h3>
          {new Intl.NumberFormat("es-PY", {
            style: "currency",
            currency: "PYG"
          }).format(props.value)}
        </h3>
        <p>{props.text}</p>
      </div>
      <div className="icon">
        <i className={`fa fa-${props.icon}`}></i>
      </div>
    </div>
  </Grid>
);
