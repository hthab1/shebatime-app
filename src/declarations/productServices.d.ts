import { ProductType } from "../types/loadedData";
import { GetProps, GetReturnType, IdType } from "./commonServices";

export interface GetProductsProps extends GetProps {}
export interface GetProductProps extends GetProps {
  id: IdType;
}

export interface GetProductsReturnType extends GetReturnType {
  products: ProductType[];
}
export interface GetProductReturnType extends GetReturnType {
  product: ProductType;
}
