import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  IconContainerProps,
  IconContainerStyleProps,
} from "../../declarations/container";

export default function IconContainer({
  children,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  touchable = false,
  width,
  height,
  iconSize,
  style,
  ...rest
}: IconContainerProps) {
  const styles = createStyles({
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    width: width || iconSize || height,
  });
  return (
    <TouchableOpacity
      disabled={!touchable}
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

const createStyles = (style?: IconContainerStyleProps) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: style?.marginLeft as number,
      marginBottom: style?.marginBottom as number,
      marginRight: style?.marginRight as number,
      marginTop: style?.marginTop as number,
      width: style?.width as number,
    },
  });
