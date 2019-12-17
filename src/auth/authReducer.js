const userkey = "_mymoney_user";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userkey)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOKEN_VALIDATED":
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userkey);
        return { ...state, validToken: false, user: null };
      }
    case "USER_FETCHED":
      localStorage.setItem(userkey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
};
