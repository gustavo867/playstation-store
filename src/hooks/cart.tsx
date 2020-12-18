import { useCallback, useMemo } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../redux';
import * as actions from '../redux/ducks/cart/actions';
import { Cart } from '../redux/ducks/cart/types';

function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: ApplicationState) => state.cart.cart);

  const cleanCart = useCallback(() => {
    dispatch(actions.removeCart());
  }, []);

  const increment = useCallback(
    (id: number) => {
      const newcart = cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      dispatch(actions.increment(newcart));
    },
    [cart],
  );

  const addToCart = useCallback(
    (product: Cart) => {
      if (cart.length >= 1) {
        const existsInCart = cart.find((p) => p.id === product.id);

        if (existsInCart) {
          Alert.alert(`${product.product_name} is already in the cart`);
          return;
        } else {
          dispatch(actions.addToCart({ ...product, quantity: 1 }));
        }
      } else {
        dispatch(actions.addToCart({ ...product, quantity: 1 }));
      }
    },
    [cart],
  );

  const decrement = useCallback(
    (id: number) => {
      const check = cart.filter((prod) => prod.id === id);
      let list;
      if (check[0].quantity < 2) {
        list = cart.filter((prod) => prod.id !== id);
      } else {
        list = cart.map((p) =>
          p.id !== id ? p : { ...p, quantity: p.quantity - 1 },
        );
      }

      dispatch(actions.decrement(list));
    },
    [cart],
  );

  const isAlreadyInTheCart = useCallback(
    (id: number) => {
      const check = cart.find((p) => p.id === id);

      if (check) {
        return true;
      } else {
        return false;
      }
    },
    [cart],
  );

  const values = useMemo(
    () => ({
      addToCart,
      increment,
      decrement,
      cleanCart,
      isAlreadyInTheCart,
    }),
    [addToCart, increment, decrement, cleanCart, isAlreadyInTheCart],
  );

  return values;
}

export default useCart;
