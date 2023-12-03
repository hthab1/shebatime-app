import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  HeaderWithBackOnlyProps,
  HeaderStyleProps,
} from "../../declarations/header";
import { ContainerWidth } from "../../utils/consts";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import CustomText from "../text/CustomText";
import ContainerStyle from "../../styles/ContainerStyle";
import Color from "../../config/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function HeaderWithBackOnly({
  parent,
  onBack,
  marginBottom,
  marginTop,
  paddingBottom,
  paddingTop,
  rightText,
  onRightPress,
  rightTextStyle,
  hideBackButton,
  ...rest
}: HeaderWithBackOnlyProps) {
  const navigate = useCustomNavigation();
  const styles = createStyles({
    marginBottom,
    marginTop,
    paddingBottom,
    paddingTop,
  });

  const handleBack = () => {
    if (parent) {
      if (onBack) {
        onBack();
      }
    } else {
      navigate.goBack();
    }
  };

  const handleRightPress = () => {
    if (onRightPress) {
      onRightPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[hideBackButton && ContainerStyle.hidden]}>
          <TouchableOpacity
            style={styles.hotSpot}
            onPress={handleBack}
          ></TouchableOpacity>
          <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={32} color={Color.black} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleRightPress}>
          <CustomText color={Color.secondaryText}>{rightText}</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = (style?: HeaderStyleProps) =>
  StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: style?.paddingTop as number,
      paddingBottom: style?.paddingBottom as number,
      marginTop: style?.marginTop as number,
      marginBottom: style?.marginBottom as number,
    },
    content: {
      width: ContainerWidth,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    hotSpot: {
      position: "absolute",
      width: 70,
      height: 50,
      top: -15,
      left: -20,
    },
  });
