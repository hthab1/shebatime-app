import { ViewStyle } from "react-native";
import { MarginVerticalProps } from "./common";
import { ProductType } from "../types/loadedData";

export interface ProductCardProps extends MarginVerticalProps {
  product: ProductType;
  style?: ViewStyle;
}
