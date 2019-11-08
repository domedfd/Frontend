import axios from "axios";
const BASE_URL = "https://dg-b.herokuapp.com/api";

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`);
  console.log("domenico" + request);
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request
  };
}
