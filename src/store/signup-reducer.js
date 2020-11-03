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
  nameCheck: false,
  emailCheck: false,
  passwordCheck: false,
};
const signupreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.USER_NAME:
      if (!action.username.match(/^[a-zа-я]{5,20}$/gi)) {
        return {
          ...state,
          nameCheck: false,
          username: action.username,
        };
      } else {
        return {
          ...state,
          nameCheck: true,
          username: action.username,
        };
      }

    case actiontype.EMAIL:
      if (
        !action.email.match(/^([a-z0-9]+\.?)+@{1}(gmail.|mail.)(com|ru)$/gi)
      ) {
        return {
          ...state,
          emailCheck: false,
          email: action.email,
        };
      } else {
        return {
          ...state,
          emailCheck: true,
          email: action.email,
        };
      }
    case actiontype.PASSWORD:
      if (!action.password.match(/^\w{10,25}$/gi)) {
        return {
          ...state,
          passwordCheck: false,
          password: action.password,
        };
      } else {
        return {
          ...state,
          passwordCheck: true,
          password: action.password,
        };
      }
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
