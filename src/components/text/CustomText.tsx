import React from "react";
import { Text, StyleSheet } from "react-native";
import { CustomTextProps, CustomTextStyleProps } from "../../declarations/text";
import { FontFamily } from "../../config/Font";
import {
  getTextFontFamily,
  getTextFontSize,
  getTextLineHeight,
} from "../../switchFunctions/textSwitchFunctions";
import { FontFamilyType } from "../../types/text";
import Color from "../../config/Colors";

export default function CustomText({
  fontSize,
  fontFamily,
  width,
  children,
  lineHeight,
  color,
  marginLeft,
  marginBottom,
  marginTop,
  marginRight,
  style,
  type,
  bold,
  xxlarge,
  xsmall,
  small,
  smallMedium,
  medium,
  xlarge,
  xxsmall,
  large,
  ...rest
}: CustomTextProps) {
  let textHeight: number | undefined = getTextLineHeight(lineHeight);
  let size: number | undefined = getTextFontSize(fontSize, {
    large,
    medium,
    small,
    smallMedium,
    xlarge,
    xsmall,
    xxlarge,
    xxsmall,
  });
  let textFontFamily: FontFamilyType = getTextFontFamily(type);

  const styles = createStyles({
    fontSize: size,
    fontFamily: bold
      ? (FontFamily.Inter700 as FontFamilyType)
      : fontFamily || textFontFamily,
    width,
    lineHeight: textHeight,
    color,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const createStyles = (style?: CustomTextStyleProps) =>
  StyleSheet.create({
    text: {
      fontFamily: style?.fontFamily || FontFamily.Inter,
      fontSize: style?.fontSize,
      lineHeight: style?.lineHeight,
      color: style?.color || Color.primaryText,
      marginTop: style?.marginTop as number,
      marginBottom: style?.marginBottom as number,
      marginLeft: style?.marginLeft as number,
      marginRight: style?.marginRight as number,
      width: style?.width as number,
    },
  });
