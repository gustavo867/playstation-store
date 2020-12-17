import { action } from 'typesafe-actions';
import { Cart, CartTypes } from './types';

export const addToCart = (product: Cart) =>
  action(CartTypes.ADD_TO_CART, product);

export const decrement = (products: Cart[]) =>
  action(CartTypes.DECREMENT_PRODUCT, products);

export const increment = (products: Cart[]) =>
  action(CartTypes.INCREASE_PRODUCT, products);

export const removeCart = () => action(CartTypes.CLEAN_CART);
