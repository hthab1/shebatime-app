import React, { useState, useRef, memo } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { OTPInputProps } from "../../declarations/input";
import { MarginStyleProps } from "../../declarations/common";
import FontSize, { FontFamily } from "../../config/Font";
import Color from "../../config/Colors";

function OTPInput({
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  numberOfInputs = 5,
  onOtpFilled,
  inputStyle,
  containerStyle,
  setOtp,
}: OTPInputProps) {
  const styles = createStyles({
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  //states
  const [otpValues, setOtpValues] = useState<Array<string>>(
    Array(numberOfInputs).fill("")
  );
  const otpRefs = useRef<Array<TextInput>>([]);

  const handleVerify = (values: Array<string>) => {
    const otpValue = values.join("");
    setOtp && setOtp(otpValue);
    if (otpValue.length === numberOfInputs) {
      onOtpFilled && onOtpFilled(otpValue);
    }
  };

  const handleFocus = (index: number) => {
    // if (index !== otpValues?.length - 1) {
    //   const newOtpValues = [...otpValues];
    //   newOtpValues[index] = "";
    //   setOtpValues(newOtpValues);
    //   handleVerify(newOtpValues);
    // }
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    handleVerify(newOtpValues);

    if (value.length > 0 && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      if (index === otpValues.length - 1) {
      } else {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {otpValues.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) otpRefs.current[index] = ref;
          }}
          autoFocus={index === 0 ? true : false}
          style={[styles.otpInput, index !== 0 && styles.middle, inputStyle]}
          onChangeText={(text) => handleOtpChange(index, text)}
          value={value}
          keyboardType="numeric"
          maxLength={1}
          onFocus={() => handleFocus(index)}
          onKeyPress={({ nativeEvent }) => {
            if (
              nativeEvent.key === "Backspace" &&
              index > 0 &&
              !otpValues[otpValues.length - 1]
            ) {
              otpRefs.current[index - 1].focus();
            }
          }}
        />
      ))}
    </View>
  );
}

const createStyles = (style?: MarginStyleProps) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: style?.marginTop as number,
      marginBottom: style?.marginBottom as number,
      marginLeft: style?.marginLeft as number,
      marginRight: style?.marginRight as number,
    },
    otpInput: {
      borderRadius: 10,
      padding: 10,
      fontSize: FontSize.large,
      fontFamily: FontFamily.Inter700,
      textAlign: "center",
      height: 52,
      borderWidth: 1,
      borderColor: Color.inputBorder,
      backgroundColor: Color.inputBackground,
      flex: 1,
      color: Color.primaryText,
    },
    middle: {
      marginLeft: 10,
    },
  });

export default memo(OTPInput);
