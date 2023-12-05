import { ViewStyle } from "react-native";
import { MarginVerticalProps } from "./common";
import { CartItemType, OrderType, ProductType } from "../types/loadedData";

export interface ProductCardProps extends MarginVerticalProps {
  product: ProductType;
  style?: ViewStyle;
}

export interface CartCardProps extends MarginVerticalProps {
  cart: CartItemType;
  style?: ViewStyle;
  selected?: boolean;
  onSelect?: (cart: CartItemType) => void;
  index: number;
}

export interface OrderCardProps extends MarginVerticalProps {
  order: OrderType;
  style?: ViewStyle;
}

export interface CartSelectedCalculationCardProps extends MarginVerticalProps {
  style?: ViewStyle;
}
