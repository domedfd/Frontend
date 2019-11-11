export default {
  API_URL:
    process.env.NODE_ENV !== "development"
      ? "https://dg-b.herokuapp.com/api"
      : "http://localhost:3003/api",
  OAPI_URL:
    process.env.NODE_ENV !== "development"
      ? "https://dg-b.herokuapp.com/oapi"
      : "http://localhost:3003/oapi"
};
