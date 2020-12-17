export enum CartTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
  INCREASE_PRODUCT = '@cart/INCREASE',
  DECREMENT_PRODUCT = '@cart/DECREMENT',
  CLEAN_CART = '@cart/CLEAN_CART',
}

export interface Cart {
  id: number;
  product_name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}

export interface CartState {
  readonly cart: Cart[];
}
