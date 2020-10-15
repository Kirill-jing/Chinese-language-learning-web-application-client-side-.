import * as actiontype from "./actions/actions";

const initialState = {
    btn:'',
    count:0,
    arr:[Math.random(),Math.random(),0.66,Math.random()].sort((a,b)=>a-b),
    cartData:[''],
    answer:false,
    anim:false,
    disable:true,
    br:'',
    audcount:0,
    audio:'',
    audCheck:false,
    inputVal:'',
    name:'',
    rightAnswers:0,
    length:0,
    sliderVal:[]

};
const trainreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
        length:action.cart.length,
        sliderVal:[0,action.cart.length]
      };
    case actiontype.HANDLE_SLIDER:
      console.log(action.e)
      return{
        sliderVal:action.e
      }
    case actiontype.CHECK_ANSWER:
    let q=state.cartData[state.count].name===action.check
      return{
        ...state,
        answer:q,
        anim:false,
        name:state.cartData[state.count].name,
        disable:false
      }
    case actiontype.NEXT_QUESTION:
      let b = state.count+1
      let quesAnswer = state.answer===true ?
        state.rightAnswers + 1 :
        state.rightAnswers
      return{
        ...state,
        count:b,
        anim:true,
        br:0.50*state.cartData.length,
        arr:[
          Math.random()*state.cartData.length,
          Math.random()*state.cartData.length,
          0.50*state.cartData.length,
          Math.random()*state.cartData.length
        ]
          .sort((a,b)=>a-b),
        name:'',
        rightAnswers:quesAnswer,
        disable:true
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
        audcount:a,
        audCheck:false ,
        inputVal:''
      }
    case actiontype.CHECK_CHAR:
      let audCheck=state
        .cartData[state.audcount]
        .name===action.val ? true : false
      return{
        ...state,
        audCheck:audCheck,
        inputVal:action.val
      }
    case actiontype.GIVE_ANSWER:
      return{
        ...state,
        inputVal:state.cartData[state.audcount].name,
        audCheck:true
      }
  }
  return state;
};

export default trainreducer;
