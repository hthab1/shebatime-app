import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedProductScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import {
  ContainerPercentPadding,
  ContainerPercentWidth,
  ScreenWidth,
} from "../utils/consts";
import Color from "../config/Colors";
import { getPrice } from "../function/text";
import HeaderWithBackOnly from "../components/header/HeaderWithBackOnly";
import { productPlaceholderData } from "../../placeholder";
import {
  CartItemType,
  ProductSizeType,
  ProductType,
} from "../types/loadedData";
import useCart from "../hooks/useCart";

function ProductScreen({ navigation, route }: LoadedProductScreenParams) {
  const navigate = useCustomNavigation();
  const { addToCart } = useCart();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { product: loadedProduct } = useSelector(
    (state: RootState) => state.product
  );

  //states
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [addedToFavourite, setSetAddedToFavourite] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType>(
    loadedProduct as ProductType
  );
  const [selectedSize, setSelectedSize] = useState<ProductSizeType | null>(
    product?.sizes ? product.sizes[0] : null
  );

  useEffect(() => {
    if (loadedProduct) {
      setProduct(loadedProduct);
    } else {
      if (route?.params.product) {
        setProduct(route?.params.product);
      }
    }
  }, []);

  useEffect(() => {
    if (product.sizes) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useOnLoadScreen({
    tabVisibility: false,
  });

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      if (viewableItems.length > 0) {
        setCurrentImageIndex(viewableItems[0].index);
      }
    }
  ).current;

  const handleAdd = () => {
    let cartItem: CartItemType = {
      product: product,
      price: product.price,
      productName: product.name,
      quantity: 1,
    };
    if (product.availableSizes) {
      cartItem.selectedSize = selectedSize?.sizeName;
      cartItem.price = selectedSize?.price || product.price;
    }
    addToCart(cartItem);
  };

  const onSizeSelect = (size: ProductSizeType) => {
    setSelectedSize(size);
  };

  const { addToCartText, descriptionText, howToUseText } =
    appCopy.ProductScreen;

  return (
    <Screen
      scroll
      header={<HeaderWithBackOnly marginTop={10} marginBottom={20} />}
      contentContainerStyle={styles.container}
      footer={
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleAdd} style={[styles.button]}>
            <CustomText color={Color.white}>{addToCartText}</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      {product.images && (
        <View style={[styles.imagesContainer]}>
          <FlatList
            data={product.images}
            keyExtractor={(_, index) => `${index}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            contentContainerStyle={styles.imageFlatlist}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.image} />
            )}
          />
          <View style={styles.paginationContainer}>
            <View style={styles.paginationContent}>
              <View style={styles.pagination}>
                {product.images && (
                  <CustomText fontSize="xxsmall">
                    {currentImageIndex + 1}/{product.images.length}
                  </CustomText>
                )}
              </View>
              <View style={styles.flex}></View>
            </View>
          </View>
        </View>
      )}

      <View style={styles.priceContainer}>
        <CustomText fontSize="smallMedium" fontFamily="Inter700">
          {product.name}
        </CustomText>
        <CustomText
          color={Color.accent}
          fontSize="medium"
          fontFamily="Inter700"
        >
          {getPrice(selectedSize?.price || product.price)}
        </CustomText>
      </View>

      {product.availableSizes && (
        <View style={[styles.descriptionContainer, styles.sizes]}>
          {product.sizes?.map((size: ProductSizeType, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.size,
                selectedSize?._id === size?._id && styles.selectedSize,
              ]}
              onPress={() => onSizeSelect(size)}
            >
              <CustomText
                marginTop={5}
                color={
                  selectedSize?._id === size?._id ? Color.white : Color.primary
                }
              >
                {size.sizeName}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <View style={styles.descriptionContainer}>
        <CustomText bold small>
          {descriptionText}
        </CustomText>
        <CustomText marginTop={5}>{product?.description}</CustomText>
      </View>
      <View style={styles.descriptionContainer}>
        <CustomText bold small>
          {howToUseText}
        </CustomText>
        <CustomText marginTop={5}>{product?.howToUsePre}</CustomText>
        {product?.howToUseSteps &&
          product?.howToUseSteps?.map((step: string, index: number) => (
            <CustomText marginTop={5} key={index}>
              {index + 1}. {step}
            </CustomText>
          ))}
        <CustomText marginTop={10}>{product?.howToUsePost}</CustomText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: ScreenWidth,
    backgroundColor: Color.secondary,
  },
  footer: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 34,
    backgroundColor: Color.white,
    paddingHorizontal: ContainerPercentPadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 42,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: Color.primary,
  },
  imagesContainer: {
    height: 280,
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.teritiary,
  },
  imagesContainerMasculine: {
    backgroundColor: Color.quaternary,
  },
  imageFlatlist: {
    alignItems: "center",
  },
  image: {
    width: ScreenWidth,
    height: 260,
    resizeMode: "contain",
  },
  paginationContainer: {
    position: "absolute",
    width: ScreenWidth,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationContent: {
    flexDirection: "row",
    paddingBottom: 10,
    width: ContainerPercentWidth,
  },
  pagination: {
    height: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: Color.white,
  },
  flex: {
    flex: 1,
  },
  viewsContainer: {
    width: ContainerPercentWidth,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  textContainer: {
    height: 23,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: Color.white,
    marginRight: 10,
  },
  priceContainer: {
    backgroundColor: Color.white,
    borderRadius: 8,
    padding: 15,
    width: ContainerPercentWidth,
    marginBottom: 10,
    marginTop: 10,
  },

  descriptionContainer: {
    backgroundColor: Color.white,
    borderRadius: 8,
    width: ContainerPercentWidth,
    marginBottom: 10,
    padding: 15,
  },
  sizes: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  size: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 9,
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Color.primary,
    backgroundColor: Color.white,
  },
  selectedSize: {
    backgroundColor: Color.primary,
  },
});

export default ProductScreen;
