import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CartSelectedCalculationCardProps } from "../../declarations/card";
import { ContainerWidth, ScreenWidth } from "../../utils/consts";
import Color from "../../config/Colors";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CustomText from "../text/CustomText";
import { getPrice } from "../../function/text";
import ContainerStyle from "../../styles/ContainerStyle";
import useCart from "../../hooks/useCart";
import { useNavigation } from "@react-navigation/native";
import useCustomNavigation from "../../hooks/useCustomNavigation";

export default function CartSelectedCalculationCard({
  style,
}: CartSelectedCalculationCardProps) {
  const navigate = useCustomNavigation();
  const { calculateTotalSelectedPrice } = useCart();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { selectedCartItems } = useSelector((state: RootState) => state.cart);

  const OnContinue = () => {
    navigate.CheckoutScreen();
  };

  const { cartItemText, cartItemsText, continueButtonText } =
    appCopy.CartScreen;
  return (
    <View
      style={[
        styles.container,
        (!selectedCartItems || selectedCartItems.length === 0) &&
          ContainerStyle.hidden,
        style,
      ]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <CustomText bold color={Color.white}>
            {selectedCartItems.length}{" "}
            {selectedCartItems.length === 1 ? cartItemText : cartItemsText}:{" "}
            {getPrice(calculateTotalSelectedPrice())}
          </CustomText>
          <TouchableOpacity onPress={OnContinue} style={styles.continueButton}>
            <CustomText bold color={Color.accent}>
              {continueButtonText}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  contentContainer: {
    position: "absolute",
    bottom: 8,
    width: ScreenWidth,
    right: 0,
    left: 0,
    alignItems: "center",
  },
  content: {
    height: 45,
    width: ContainerWidth,
    borderRadius: 100,
    backgroundColor: Color.accent,
    padding: 5,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  continueButton: {
    backgroundColor: Color.white,
    height: "100%",
    paddingHorizontal: 25,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
