import React, { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {
  PrimaryInputProps,
  PrimaryInputStyleProps,
} from "../../declarations/input";
import FontSize, { FontFamily } from "../../config/Font";
import Color from "../../config/Colors";

const PrimaryInput: ForwardRefRenderFunction<TextInput, PrimaryInputProps> = (
  {
    placeholder,
    value,
    onChangeText,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    containerStyle,
    textInputStyle,
    leftIcon,
    rightIcon,
    ...rest
  },
  ref
) => {
  const styles = createStyles({
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <TextInput
        ref={ref}
        style={[styles.input, textInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={Color.inputBorder}
        value={inputValue}
        onChangeText={handleInputChange}
        {...rest}
      />
      {rightIcon && <View style={styles.leftIcon}>{rightIcon}</View>}
    </View>
  );
};

const createStyles = (style?: PrimaryInputStyleProps) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: Color.inputBorder,
      backgroundColor: Color.inputBackground,
      height: 52,
      maxHeight: 52,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 15,
      marginTop: (style?.marginTop as number) || 5,
      marginBottom: (style?.marginBottom as number) || 5,
      marginLeft: (style?.marginLeft as number) || 0,
      marginRight: (style?.marginRight as number) || 0,
      paddingHorizontal: 20,
      flex: 1,
    },
    input: {
      color: Color.primaryText,
      fontSize: FontSize.xsmall,
      fontFamily: FontFamily.Inter,
      flex: 1,
      height: "100%",
    },
    leftIcon: {
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      width: 20,
    },
    rightIcon: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
    },
  });

export default forwardRef<TextInput, PrimaryInputProps>(PrimaryInput);
