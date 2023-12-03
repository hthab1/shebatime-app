import React from "react";
import { StyleSheet } from "react-native";
import { ErrorTextProps } from "../../declarations/text";
import CustomText from "./CustomText";
import Color from "../../config/Colors";

export default function ErrorText({
  error,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  visible,
  style,
}: ErrorTextProps) {
  return (
    <>
      {visible && (
        <CustomText
          fontSize="xsmall"
          color={Color.primary}
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          style={style}
        >
          {error}
        </CustomText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
