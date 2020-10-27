import * as actiontype from "./actions/actions";

const initialState = {
  logName: "",
  logPassword: "",
  isAuth: false,
  token: undefined,
  userId: undefined,
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
      };
  }
  return state;
};

export default loginreducer;
