import * as actiontype from "./actions/actions";
const initialState = {
  data: [],
  details: false,
  modalWord: {},
  hskdata: [],
};
const asyncreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE:
      return {
        ...state,
        data: action.words,
      };

    case actiontype.OPEN:
      let word = state.data.filter((w) => {
        return w._id == action.id;
      })[0];
      return {
        ...state,
        details: true,
        modalWord: word,
      };
    case actiontype.CLOSE:
      return {
        ...state,
        details: false,
      };
    case actiontype.HSK_4:
      let hsk4 = state.data.filter((el) => {
        return el.type === "HSK 4";
      });
      return {
        ...state,
        hskdata: hsk4,
      };
    case actiontype.HSK_3:
      let hsk3 = state.data.filter((el) => {
        return el.type === "HSK 3";
      });
      return {
        ...state,
        hskdata: hsk3,
      };
  }
  return state;
};

export default asyncreducer;
