import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";
import consts from "../consts";

const INITIAL_VALUES = { list: [{}] };

export function getList() {
  const request = axios.get(`${consts.API_URL}/user/`);
  return {
    type: "USERS_FETCHED",
    payload: request
  };
}

export function create(values) {
  return submit2(values, "post", `${consts.OAPI_URL}/signup`);
}
export function update(values) {
  return submit2(values, "put", `${consts.OAPI_URL}/altera`);
}

export function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  const novo = { ...values };

  const id = novo._id ? novo._id : "";

  return dispatch => {
    axios[method](`${consts.API_URL}/user/${id}`, novo)
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
export function showUpdate(UserManager) {
  const UpdateUser = { ...UserManager, password: "" };
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("UserManagerForm", UpdateUser)
  ];
}
export function showDelete(UserManager) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("UserManagerForm", UserManager)
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("UserManagerForm", INITIAL_VALUES)
  ];
}

function submit2(values, method, url) {
  return dispatch => {
    axios[method](url, values)
      .then(resp => {
        toastr.success("Exito", "Operacao Realizada con exito");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Error", error));
      });
  };
}
