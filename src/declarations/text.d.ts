import { ReactNode } from "react";
import { TextProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import {
  FontFamilyType,
  FontSizeType,
  LineHeightType,
  TextType,
} from "../types/text";
import { MarginStyleProps } from "./common";

export interface FontSizeBooleanTypes {
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  smallMedium?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
}

export interface CustomTextProps extends TextProps, FontSizeBooleanTypes {
  children?: ReactNode;
  fontSize?: FontSizeType;
  fontFamily?: FontFamilyType;
  width?: number | string;
  lineHeight?: LineHeightType;
  color?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  type?: TextType;
  bold?: boolean;
}

export interface CustomTextStyleProps {
  fontSize?: number;
  fontFamily?: FontFamilyType;
  width?: number | string;
  lineHeight?: number;
  color?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  style?: StyleProp<ViewStyle>;
}

export interface ErrorTextProps extends MarginStyleProps {
  visible?: boolean | string;
  error?: string;
  style?: StyleProp<TextStyle>;
}
