import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export interface IconContainerProps extends TouchableOpacityProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  children?: ReactNode;
  touchable?: boolean;
  width?: number | string;
  height?: number | string;
  iconSize?: number | string;
  color?: string;
}

export interface IconContainerStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  width?: number | string;
}
