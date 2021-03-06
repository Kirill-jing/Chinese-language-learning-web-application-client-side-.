import * as actiontype from "./actions/actions";
const initialState = {
  data: [],
  details: false,
  modalWord: {},
  hskdata: [],
  regData: [],
  checkedVal: false,
  checkedArr: [],
  example: 0,
  animbut: false,
  amount: 0,
  sliderVal: [0, 0],
  limit: 0,
};
const asyncreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE:
      let hsk = action.words.filter((el) => {
        return el.type === "HSK 4";
      });
      return {
        ...state,
        data: action.words,
        hskdata: hsk,
        regData: hsk,
      };
    case actiontype.HANDLE_MAIN_SLIDER:
      return {
        ...state,
        sliderVal: action.e,
        start: action.e[0],
        limit: action.e[1],
      };
    case actiontype.FIND_WORDS:
      let arr = [...state.regData];
      let quesWords = arr.filter((el) => el.nameTr.match(action.val));
      return {
        ...state,
        hskdata: quesWords,
      };
    case actiontype.FIND_CHAR:
      let chararr = [...state.regData];
      let quesChar = chararr.filter((el) => el.name.match(action.val));
      return {
        ...state,
        hskdata: quesChar,
      };
    case actiontype.ADD_CHECK:
      let newArr = state.checkedArr;
      newArr.push(action.value);
      let newAm = state.amount + 1;
      if (action.check === true) {
        return {
          ...state,
          checkedArr: newArr,
          animbut: true,
          amount: newAm,
        };
      }
      let jArr = state.checkedArr.filter((el) => el != action.value);
      let oldAm = state.amount - 1;
      return {
        ...state,
        checkedArr: jArr,
        amount: oldAm,
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
        regData: hsk4,
        sliderVal: [0, 0],
      };
    case actiontype.HSK_3:
      let hsk3 = state.data.filter((el) => {
        return el.type === "HSK 3";
      });
      return {
        ...state,
        hskdata: hsk3,
        regData: hsk3,
        sliderVal: [0, 0],
      };
  }
  return state;
};

export default asyncreducer;
