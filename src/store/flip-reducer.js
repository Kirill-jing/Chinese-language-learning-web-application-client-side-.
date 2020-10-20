import { TrafficOutlined } from "@material-ui/icons";
import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    cartData:[''],
    flipBtn:undefined,
    inner:false,
    opac:false,
    tranOrChar:true
};
const flipreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
      };
    case actiontype.CHANGE_DIR:
      let newDir=!state.tranOrChar
      console.log(newDir)
      return{
        ...state,
        tranOrChar:newDir
      }
    case actiontype.FLIP_BTN:
        return{
            ...state,
            flipBtn:true,
            opac:false
      }
    case actiontype.CHANGE_INNER:
      return{
        ...state,
        inner:true,
      }
    case actiontype.ANIM_OPAC:
      return {
        ...state,
        opac:true,
      }
    case actiontype.NEXT_FLIP:
      let b = state.count+1
      return {
        ...state,
        count:b,
        flipBtn:false,
        inner:false,
      }
  }
  return state;
};

export default flipreducer;
