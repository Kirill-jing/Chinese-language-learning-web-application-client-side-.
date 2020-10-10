import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    arr:['1','2','3','4'],
    cartData:[]
};
const trainreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
      };
    case actiontype.CHECK_ANSWER:
      console.log(state.cartData[state.count].name===action.check)
      return{
        ...state,

      }
    
  }
  return state;
};

export default trainreducer;
