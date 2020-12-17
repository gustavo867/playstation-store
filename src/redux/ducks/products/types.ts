export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
}

export interface Product {
  id: number;
  product_name: string;
  category: string;
  url: string;
  price: number;
}

export interface ProductsState {
  readonly products: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}
