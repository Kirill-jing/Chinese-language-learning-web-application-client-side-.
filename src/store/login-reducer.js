import * as actiontype from "./actions/actions";

const initialState = {
  logName: "",
  logPassword: "",
  isAuth: false,
  token: undefined,
  userId: undefined,
  loginRedirect: false,
};

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.LOG_NAME:
      return {
        ...state,
        logName: action.logName,
      };
    case actiontype.LOG_PASSWORD:
      return {
        ...state,
        logPassword: action.logPassword,
      };
    case actiontype.AUTH:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        userId: action.userId,
        loginRedirect: true,
      };
    case actiontype.SET_RED:
      return {
        ...state,
        loginRedirect: false,
      };
  }
  return state;
};

export default loginreducer;
