import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'cart'],
};

import products from './products';
import theme from './theme';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  theme,
  cart,
});

export default persistReducer(persistConfig, rootReducer);
