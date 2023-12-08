import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CartCardProps } from "../../declarations/card";
import { MarginVerticalProps } from "../../declarations/common";
import Color from "../../config/Colors";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import CustomText from "../text/CustomText";
import { getPrice } from "../../function/text";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import IconFeather from "@expo/vector-icons/Feather";
import Checkbox from "../common/Checkbox";
import useCart from "../../hooks/useCart";
import { setProduct } from "../../reducers/productReducer";

export default function CartCard({
  cart,
  marginBottom,
  marginTop,
  style,
  index,
}: CartCardProps) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { removeFromCart, onItemSelect, increaseQuantity, decreaseQuantity } =
    useCart();
  const styles = createStyles({ marginBottom, marginTop });
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { selectedCartItems } = useSelector((state: RootState) => state.cart);

  const productName = cart.productName;
  const productImage = cart.product.images && cart.product.images[0];
  const productPrice = cart.price;
  const productSelectedSizeQuantity = cart.selectedSize;
  const productQuantity = cart.quantity;

  const onImagePress = () => {
    dispatch(setProduct(cart.product));
    navigate.ProductScreen({
      product: cart.product,
    });
  };

  const OnAdd = () => {
    increaseQuantity(index);
  };

  const OnSubtract = () => {
    decreaseQuantity(index);
  };

  const OnDelete = () => {
    removeFromCart(index);
  };

  const OnSelect = () => {
    onItemSelect(index);
  };

  const { selectedText } = appCopy.CartScreen;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.imageContainer} onPress={onImagePress}>
        <Image source={{ uri: productImage }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <CustomText bold numberOfLines={3}>
          {productName}
        </CustomText>
        <CustomText bold color={Color.accent}>
          {getPrice(productPrice)}
        </CustomText>
        <View style={styles.sizeContainer}>
          {productSelectedSizeQuantity && (
            <CustomText xsmall>
              {selectedText}: {productSelectedSizeQuantity}
            </CustomText>
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={OnSubtract}>
            <IconFeather name="minus" color={Color.white} size={12} />
          </TouchableOpacity>
          <CustomText xsmall bold>
            {productQuantity}
          </CustomText>
          <TouchableOpacity style={styles.button} onPress={OnAdd}>
            <IconFeather name="plus" color={Color.white} size={12} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Checkbox
          selected={
            typeof selectedCartItems.find((item) => item === index) === "number"
              ? true
              : false
          }
          onPress={OnSelect}
        />
        <TouchableOpacity onPress={OnDelete}>
          <IconFeather name="trash-2" color={Color.primary} size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = ({ marginBottom, marginTop }: MarginVerticalProps) =>
  StyleSheet.create({
    container: {
      marginTop: (marginTop as number) || 5,
      marginBottom: (marginBottom as number) || 5,
      width: "100%",
      backgroundColor: Color.white,
      borderRadius: 10,
      height: 150,
      padding: 6,
      flexDirection: "row",
    },
    imageContainer: {
      backgroundColor: Color.teritiary,
      width: 135,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginRight: 10,
    },
    image: {
      height: 106,
      width: 106,
      resizeMode: "contain",
    },
    imageContainerMasculine: { backgroundColor: Color.quaternary },
    content: {
      flex: 1,
      flexDirection: "column",
    },
    sizeContainer: {
      flex: 1,
      justifyContent: "center",
    },
    buttonsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: 70,
    },
    button: {
      width: 20,
      height: 20,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Color.primary,
    },
    rightContent: {
      height: "100%",
      marginLeft: 10,
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
