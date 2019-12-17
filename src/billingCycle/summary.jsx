import React from "react";

import Grid from "../common/layout/gird";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox
          cols="12 4"
          color="green"
          icon="bank"
          value={credit}
          text="Total de Creditos"
        />
        <ValueBox
          cols="12 4"
          color="red"
          icon="credit-card"
          value={debt}
          text="Total de Debitos"
        />
        <ValueBox
          cols="12 4"
          color="blue"
          icon="money"
          value={credit - debt}
          text="Saldo"
        />
      </Row>
    </fieldset>
  </Grid>
);
