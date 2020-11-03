import * as actiontype from "./actions/actions";

const initialState = {
  btn: "",
  count: 0,
  arr: [],
  cartData: [""],
  answer: false,
  anim: false,
  disable: true,
  br: "",
  audcount: 0,
  audio: "",
  audCheck: false,
  inputVal: "",
  name: "",
  rightAnswers: 0,
  length: 0,
  sliderVal: [],
  audio: "",
  char: "",
  limit: 0,
  history: "",
  redirect: false,
};
const trainreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
        length: action.cart.length,
        sliderVal: [0, action.cart.length],
        arr: [2, 4, 0.66, 3].sort((a, b) => a - b),
        audio: action.cart.length > 0 ? action.cart[0].audio : " ",
        char: action.cart.length > 0 ? action.cart[0].name : " ",
        history: action.history,
      };
    case actiontype.HANDLE_SLIDER:
      return {
        sliderVal: action.e,
        audcount: action.e[0],
        arr: [1, 0.66, 1, 1],
        count: action.e[0],
        limit: action.e[1],
      };
    case actiontype.CHECK_ANSWER:
      let q = state.cartData[state.count].nameTr === action.check;
      return {
        ...state,
        answer: q,
        anim: false,
        name: state.cartData[state.count].nameTr,
        disable: false,
      };
    case actiontype.NEXT_QUESTION:
      let b = state.count + 1;
      if (b === state.limit) {
        alert("Вы достигли устаноленного вами лимита :)");
      }
      if (b === state.cartData.length) {
        return {
          ...state,
          count: 0,
          audio: state.cartData[0],
          disable: true,
        };
      }
      let quesAnswer =
        state.answer === true ? state.rightAnswers + 1 : state.rightAnswers;
      return {
        ...state,
        count: b,
        audio: state.cartData[b],
        anim: true,
        br: 0.5 * state.cartData.length,
        arr: [
          Math.random() * state.cartData.length,
          Math.random() * state.cartData.length,
          0.5 * state.cartData.length,
          Math.random() * state.cartData.length,
        ].sort((a, b) => a - b),
        name: "",
        rightAnswers: quesAnswer,
        disable: true,
      };
    case actiontype.ANIM_FALSE:
      let c = state.count + 1;
      if (c === state.cartData.length) {
        return {
          ...state,
          anim: false,
          redirect: true,
          disable: true,
        };
      }
      return {
        ...state,
        anim: true,
      };
    case actiontype.SET_AUDIO:
      return {
        ...state,
        audio: state.cartData[state.audcount].audio,
      };
    case actiontype.NEXT_AUDIO:
      console.log(state.audio);
      let a = state.audcount + 1;
      return {
        ...state,
        audcount: a,
        audio: state.cartData[a].audio,
        audCheck: false,
        inputVal: "",
      };
    case actiontype.CHECK_CHAR:
      let audCheck =
        state.cartData[state.audcount].name === action.val ? true : false;
      return {
        ...state,
        audCheck: audCheck,
        inputVal: action.val,
      };
    case actiontype.GIVE_ANSWER:
      return {
        ...state,
        inputVal: state.cartData[state.audcount].name,
        audCheck: true,
      };
    case actiontype.SET_RED:
      return {
        ...state,
        redirect: false,
      };
  }
  return state;
};

export default trainreducer;
