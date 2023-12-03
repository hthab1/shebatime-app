import { StyleProp, ViewStyle, TouchableOpacityProps } from "react-native";

export interface PrimaryButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  label?: string;
  loading?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  labelColor?: string;
  primary?: boolean;
  secondary?: boolean;
}

export interface PrimaryButtonStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
}
