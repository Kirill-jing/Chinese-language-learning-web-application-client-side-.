import * as actiontype from "./actions/actions";

const initialState = {
  cartData: [],
  token: undefined,
  userId: undefined,
  example: 0,
};

const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
        example:action.cart.length===0 ? 1 : action.cart.length,
      };
    case actiontype.DELETE_CART:

      return {
        ...state,
        cartData: action.cartData,
      };
  }
  return state;
};

export default cartreducer;
