import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ProductCardProps } from "../../declarations/card";
import { MarginVerticalProps } from "../../declarations/common";
import Color from "../../config/Colors";
import IconFeather from "@expo/vector-icons/Feather";
import CustomText from "../text/CustomText";
import { getPrice } from "../../function/text";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import { CartItemType } from "../../types/loadedData";
import useCart from "../../hooks/useCart";
import { useDispatch } from "react-redux";
import { setProduct } from "../../reducers/productReducer";

export default function ProductCard({
  product,
  marginBottom,
  marginTop,
  style,
}: ProductCardProps) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { addToCart } = useCart();
  const styles = createStyles({ marginBottom, marginTop });

  const productImage = product.images && product.images[0];
  const productName = product.name;
  const productPrice = product.price;
  const productType = product.type;

  const onImagePress = () => {
    OpenProduct();
  };

  const onContentPress = () => {
    OpenProduct();
  };

  const onAdd = () => {
    let cartItem: CartItemType = {
      product: product,
      price: product.price,
      productName: product.name,
      quantity: 1,
    };
    if (product.sizes) {
      cartItem.selectedSize = product.sizes[0]?.sizeName;
    }
    addToCart(cartItem);
  };

  const OpenProduct = () => {
    dispatch(setProduct(product));
    navigate.ProductScreen({ product });
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onImagePress}
        style={[
          styles.imageContainer,
          productType === "masculine" && styles.imageContainerMasculine,
        ]}
      >
        <Image source={{ uri: productImage }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity onPress={onContentPress} style={styles.left}>
          <CustomText numberOfLines={1} marginBottom={2} bold>
            {productName}
          </CustomText>
          <CustomText numberOfLines={1} bold color={Color.accent}>
            {getPrice(productPrice)}
          </CustomText>
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity style={styles.plusButtonContainer} onPress={onAdd}>
            <IconFeather name="plus" size={20} color={Color.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const createStyles = ({ marginBottom, marginTop }: MarginVerticalProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: Color.white,
      flexDirection: "column",
      padding: 6,
      borderRadius: 8,
      height: 260,
      width: "49%",
      marginVertical: 3,
    },
    imageContainer: {
      backgroundColor: Color.teritiary,
      alignItems: "center",
      justifyContent: "center",
      height: 200,
      borderRadius: 6,
    },
    imageContainerMasculine: {
      backgroundColor: Color.quaternary,
    },
    image: {
      width: "100%",
      height: 160,
      resizeMode: "contain",
      borderRadius: 6,
      marginBottom: 10,
    },
    content: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    left: {
      flexDirection: "column",
      justifyContent: "flex-end",
      flex: 1,
    },
    right: {
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    plusButtonContainer: {
      backgroundColor: Color.primary,
      height: 30,
      width: 30,
      borderRadius: 30,
      marginLeft: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });
