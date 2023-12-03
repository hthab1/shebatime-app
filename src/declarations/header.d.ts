import { TouchableOpacityProps, StyleProp, TextStyle } from "react-native";
import { MarginVerticalProps } from "./common";

export interface HeaderWithBackOnlyProps extends TouchableOpacityProps {
  parent?: boolean;
  onBack?: () => void;
  hideBackButton?: boolean;
  marginTop?: string | number;
  marginBottom?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  rightText?: string;
  onRightPress?: () => void;
  rightTextStyle?: StyleProp<TextStyle>;
}

export interface HeaderWithBackAndShareProps extends TouchableOpacityProps {
  parent?: boolean;
  onBack?: () => void;
  hideBackButton?: boolean;
  marginTop?: string | number;
  marginBottom?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  onShare?: () => void;
}

export interface HeaderStyleProps {
  marginTop?: string | number;
  marginBottom?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}
