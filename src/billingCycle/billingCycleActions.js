import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import consts from "../consts";
import CoverteMoeda, { CoverteNum } from "./../common/form/NormalizePhone";

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${consts.API_URL}/billingCycles/`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

export function create(values) {
  return submit(values, "post");
}
export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  const novo = { ...values };
  for (let index = 0; index < novo.debts.length; index++) {
    const debitos = novo.debts[index].value;
    const creditos = novo.credits[index].value;
    novo.debts[index].value = CoverteNum(debitos);
    novo.credits[index].value = CoverteNum(creditos);
  }

  const id = novo._id ? novo._id : "";
  return dispatch => {
    axios[method](`${consts.API_URL}/billingCycles/${id}`, novo)
      .then(resp => {
        toastr.success("Exito", "Operacao Realizada con exito");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Error", error));
      });
  };
}

// Refacturar esta funcion
export function showUpdate(billingCycle) {
  for (let index = 0; index < billingCycle.credits.length; index++) {
    billingCycle.credits[index].value = CoverteMoeda(
      `${billingCycle.credits[index].value}`
    );
  }
  for (let index = 0; index < billingCycle.debts.length; index++) {
    billingCycle.debts[index].value = CoverteMoeda(
      `${billingCycle.debts[index].value}`
    );
  }

  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle)
  ];
}
export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle)
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES)
  ];
}
