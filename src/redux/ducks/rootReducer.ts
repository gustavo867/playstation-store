import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

import products from './products';
import theme from './theme';

const rootReducer = combineReducers({
  products,
  theme,
});

export default persistReducer(persistConfig, rootReducer);
