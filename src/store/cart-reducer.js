import * as actiontype from "./actions/actions";

const initialState = {
  cartData: [],
  token: undefined,
  userId: undefined,
};

const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.STORE_CART:
      return {
        ...state,
        cartData: action.cart,
      };
  }
  return state;
};

export default cartreducer;
