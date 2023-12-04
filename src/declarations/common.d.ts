import { ScrollViewProps, ViewStyle } from "react-native";

export interface MarginStyleProps {
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
}

export interface MarginVerticalProps {
  marginTop?: string | number;
  marginBottom?: string | number;
}

export interface MarginHorizontalProps {
  marginLeft?: string | number;
  marginRight?: string | number;
}
export interface PaddingStyleProps {
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
}

export interface PaddingVerticalProps {
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

export interface PaddingHorizontalProps {
  paddingLeft?: string | number;
  paddingRight?: string | number;
}

export interface CheckboxProps extends MarginStyleProps {
  onPress?: () => void;
  selected?: boolean;
}
