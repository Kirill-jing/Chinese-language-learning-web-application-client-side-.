import * as actiontype from "./actions/actions";

const initialState = {
  cartData: [],
  token: undefined,
  userId: undefined,
  checkedArr:[],
  length:0
};

const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
        length:action.cart.length
      };
    case actiontype.DELETE_CART:
      return {
        ...state,
        cartData: action.cartData,
      };
    case actiontype.ADD_CART_CHECK:
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
    case actiontype.FILTER_MULTIPLE:
      return{
        ...state,
        cartData:action.newArr
      }
  }
  return state;
};

export default cartreducer;
