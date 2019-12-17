export default {
  API_URL:
    process.env.NODE_ENV !== "development"
      ? "http://157.230.215.233:3003/api" //"https://dg-b.herokuapp.com/api"
      : "http://localhost:3003/api",
  OAPI_URL:
    process.env.NODE_ENV !== "development"
      ? "http://157.230.215.233:3003/oapi" //https://dg-b.herokuapp.com/oapi"
      : "http://localhost:3003/oapi"
};
