import { Reducer } from 'redux';
import { ProductsTypes, ProductsState } from './types';

const INITIAL_STATE: ProductsState = {
  products: [
    {
      id: 1,
      product_name: 'Playstation 5',
      category: 'Game console',
      url:
        'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$',
      price: 500,
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.LOAD_SUCCESS:
      return { ...state, products: action.payload };
    case ProductsTypes.LOAD_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
