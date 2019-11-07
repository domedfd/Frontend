import React from "react";
import { Switch, Route, Redirect } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);
