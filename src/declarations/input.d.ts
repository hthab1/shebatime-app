import { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { MarginStyleProps } from "./common";

export interface PrimaryInputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface PrimaryInputPlaceholderProps {
  value?: string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

export interface PrimaryInputStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

export interface OTPInputProps extends MarginStyleProps {
  numberOfInputs?: number;
  onOtpFilled?: (otp: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  setOtp?: (otp: string) => void;
}
