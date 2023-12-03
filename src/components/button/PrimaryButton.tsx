import React from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  PrimaryButtonProps,
  PrimaryButtonStyleProps,
} from "../../declarations/button";
import { ContainerWidth } from "../../utils/consts";
import CustomText from "../text/CustomText";
import Color from "../../config/Colors";

export default function PrimaryButton({
  width,
  height,
  label,
  labelColor,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  color,
  primary,
  secondary,
  loading,
  style,
  ...rest
}: PrimaryButtonProps) {
  let textLabelColor = labelColor
    ? labelColor
    : primary
    ? Color.white
    : secondary
    ? Color.primary
    : Color.white;

  let buttonColor = color
    ? color
    : primary
    ? Color.primary
    : secondary
    ? Color.secondary
    : Color.secondary;

  const styles = createStyles({
    color: buttonColor,
    height,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width,
  });

  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      {loading ? (
        <ActivityIndicator size={20} color={labelColor || textLabelColor} />
      ) : (
        <CustomText color={labelColor || textLabelColor} type="bold">
          {label}
        </CustomText>
      )}
    </TouchableOpacity>
  );
}

const createStyles = (style?: PrimaryButtonStyleProps) =>
  StyleSheet.create({
    container: {
      width: (style?.width as number) || ContainerWidth,
      height: (style?.height as number) || (52 as number),
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: style?.color || Color.primary,
      marginTop: (style?.marginTop as number) || 5,
      marginLeft: (style?.marginLeft as number) || 0,
      marginRight: (style?.marginRight as number) || 0,
      marginBottom: (style?.marginBottom as number) || 5,
    },
  });
