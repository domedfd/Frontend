import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";
import UserManager from "../user/UserManager";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/users" component={UserManager} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
