import { TramRounded } from "@material-ui/icons";
import * as actiontype from "./actions/actions";
const initialState = {
  data: [],
  details: false,
  modalWord: {},
  hskdata: [],
  regData:[],
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
    case actiontype.FIND_WORDS:
      let arr=[...state.regData]
      let quesWords=arr.filter(el=>el.nameTr.match(action.val))
      return{
        ...state,
        hskdata:quesWords
      }
    case actiontype.FIND_CHAR:
        let chararr=[...state.regData]
        let quesChar=chararr.filter(el=>el.name.match(action.val))
        return{
          ...state,
          hskdata:quesChar
        }
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
        regData:hsk4
      };
    case actiontype.HSK_3:
      let hsk3 = state.data.filter((el) => {
        return el.type === "HSK 3";
      });
      return {
        ...state,
        hskdata: hsk3,
        regData:hsk3
      };
  }
  return state;
};

export default asyncreducer;
