import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashboardReducer from "../dashboard/dashboardReducer";

import TabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";
import AuthReducer from "../auth/authReducer";
import UserManagerReducer from "../user/UserManagerReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer, //() => ({ summary: { credit: 100, debt: 50 } })
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
  user: UserManagerReducer
});
export default rootReducer;
