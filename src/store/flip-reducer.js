import { TrafficOutlined } from "@material-ui/icons";
import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    cartData:[''],
    flipBtn:undefined,
    inner:false,
    opac:false,
    tranOrChar:true,
    redirect:false
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
      let length=state.cartData.length
      if(b == length){
        return {
          ...state,
          count:0,
          redirect:true,
          flipBtn:false,
          inner:false,
          opac:false
        }
      }
      return {
        ...state,
        count:b,
        flipBtn:false,
        inner:false,
      }
    case actiontype.SET_RED:
      return{
        ...state,
        redirect:false
    }
  }
  return state;
};

export default flipreducer;
