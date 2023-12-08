import {
  CartItemType,
  CheckoutOrderType,
  OrderType,
} from "../types/loadedData";
import { GetProps } from "./commonServices";

export interface checkoutFunctionProps extends GetProps {
  deliveryAddress?: string;
}

export interface CheckoutProps {
  order: CheckoutOrderType;
  deliveryAddress?: string;
  setLoading?: (loading: boolean) => void;
}
export interface GetOrdersProps extends GetProps {}

export interface CheckoutReturnType {
  status?: number;
  message?: string;
  data?: OrderType;
}
export interface GetOrdersReturnType {
  status: number;
  message?: string;
  orders: OrderType[];
}
