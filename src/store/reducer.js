import * as actiontype from "./actions/actions";
const initialState = {
  name: "",
  nameType: "",
  nameTr: "",
  pinin: "",
  example: "",
  exampleTr: "",
  examplePinin: "",
  type: "",
  image: undefined,
  audio: undefined,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.NAME:
      return {
        ...state,
        name: action.name,
      };
    case actiontype.NAME_TYPE:
      return {
        ...state,
        nameType: action.nameType,
      };
    case actiontype.NAME_TR:
      return {
        ...state,
        nameTr: action.nameTr,
      };
    case actiontype.PININ:
      return {
        ...state,
        pinin: action.pinin,
      };
    case actiontype.EXAMPLE:
      return {
        ...state,
        example: action.example,
      };
    case actiontype.EXAMPLE_TR:
      return {
        ...state,
        exampleTr: action.exampleTr,
      };
    case actiontype.EXAMPLE_PININ:
      return {
        ...state,
        examplePinin: action.examplePinin,
      };
    case actiontype.TYPE:
      return {
        ...state,
        type: action.hskType,
      };
    case actiontype.IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case actiontype.AUDIO:
      return {
        ...state,
        audio: action.audio,
      };
  }
  return state;
};

export default reducer;
