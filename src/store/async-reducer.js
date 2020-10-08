import { TramRounded } from "@material-ui/icons";
import * as actiontype from "./actions/actions";
const initialState = {
  data: [],
  details: false,
  modalWord: {},
  hskdata: [],
  checkedVal: false,
  checkedArr: [],
  example:0
};
const asyncreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE:
      return {
        ...state,
        data: action.words,
      };
    case actiontype.ADD_CHECK:
      let newArr = state.checkedArr;
      newArr.push(action.value);
      if (action.check === true) {
        return {
          ...state,
          checkedArr: newArr,
        };
      }
      let jArr = state.checkedArr.filter((el) => el != action.value);
      return {
        ...state,
        checkedArr: jArr,
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
