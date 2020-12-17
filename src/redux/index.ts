import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { ProductsState } from './ducks/products/types';
import { ThemeState } from './ducks/theme/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { CartState } from './ducks/cart/types';

export interface ApplicationState {
  products: ProductsState;
  theme: ThemeState;
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
