import {Product} from "./product";

export interface ProductUnit {
  uuid: string;
  product: Product;
  quantity: number;
}
