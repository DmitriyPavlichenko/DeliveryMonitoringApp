import {ResponseProduct} from "../product/responseProduct";

export interface ProductUnit {
  uuid: string;
  product: ResponseProduct;
  quantity: number;
}
