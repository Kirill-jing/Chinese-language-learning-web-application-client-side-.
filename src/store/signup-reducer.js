import * as actiontype from "./actions/actions";

const initialState = {
  username: "",
  email: "",
  password: "",
  isAuth: false,
  token: undefined,
  userId: undefined,
  sun: false,
  signRedirect: false,
};
const signupreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.USER_NAME:
      return {
        ...state,
        username: action.username,
      };
    case actiontype.EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case actiontype.PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case actiontype.AUTH:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        userId: action.userId,
        signRedirect: true,
      };
    case actiontype.CHECK_AUTH:
      return {
        ...state,
        token: action.token,
        userId: action.id,
        isAuth: !action.timeCheck,
      };
    case actiontype.CHANGE_THEME:
      return {
        ...state,
        sun: action.sun,
      };
    case actiontype.SET_RED:
      return {
        ...state,
        signRedirect: false,
      };
  }
  return state;
};

export default signupreducer;
