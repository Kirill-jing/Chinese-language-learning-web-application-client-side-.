import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    arr:[Math.random(),Math.random(),'0.66',Math.random()].sort((a,b)=>a-b),
    cartData:[],
    answer:false
};
const trainreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
      };
    case actiontype.CHECK_ANSWER:
    let q=state.cartData[state.count].name===action.check
      return{
        ...state,
        answer:q
      }
    case actiontype.NEXT_QUESTION:
      let b = state.count+1
      return{
        ...state,
        count:b
      }
  }
  return state;
};

export default trainreducer;
