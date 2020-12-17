import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: any = {
  cart: [],
};

const cartReducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      return {
        cart: action.payload,
      };
    case CartTypes.INCREASE_PRODUCT:
      return {
        cart: action.payload,
      };
    case CartTypes.CLEAN_CART:
      return {
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
