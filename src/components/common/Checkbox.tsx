import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CheckboxProps, MarginStyleProps } from "../../declarations/common";
import Color from "../../config/Colors";

export default function Checkbox({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  onPress,
  selected,
}: CheckboxProps) {
  const styles = createStyle({
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  const handlePress = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, selected && styles.selected]}
    ></TouchableOpacity>
  );
}

const createStyle = ({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: MarginStyleProps) =>
  StyleSheet.create({
    container: {
      marginTop: marginTop as number,
      marginBottom: marginBottom as number,
      marginRight: marginRight as number,
      marginLeft: marginLeft as number,
      width: 15,
      height: 15,
      borderWidth: 1,
      borderColor: Color.primary,
      borderRadius: 2,
      backgroundColor: "transparent",
    },
    selected: {
      backgroundColor: Color.accent,
      borderColor: Color.accent,
    },
  });
