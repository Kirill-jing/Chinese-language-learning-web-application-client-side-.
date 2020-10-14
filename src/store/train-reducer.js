import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    arr:[Math.random(),Math.random(),0.66,Math.random()].sort((a,b)=>a-b),
    cartData:[''],
    answer:false,
    anim:false,
    br:'',
    audcount:0,
    audio:''

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
        answer:q,
        anim:false
      }
    case actiontype.NEXT_QUESTION:
      let b = state.count+1
      return{
        ...state,
        count:b,
        anim:true,
        br:0.50*state.cartData.length,
        arr:[Math.random()*state.cartData.length,
            Math.random()*state.cartData.length,
            0.50*state.cartData.length,
            Math.random()*state.cartData.length]
            .sort((a,b)=>a-b),
          } 
    case actiontype.ANIM_FALSE:
      return {
        ...state,
        anim:true,
     }
    case actiontype.SET_AUDIO:
      return{
        ...state,
        audio:state.cartData[state.audcount].audio
      }
    case actiontype.NEXT_AUDIO:
      let a = state.audcount+1
      return{
        ...state,
        audcount:a
      }
  }
  return state;
};

export default trainreducer;
