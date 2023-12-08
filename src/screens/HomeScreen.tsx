import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedHomeScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import Color from "../config/Colors";
import PrimaryInput from "../components/input/PrimaryInput";
import { ContainerWidth, ScreenWidth } from "../utils/consts";
import IconFeather from "@expo/vector-icons/Feather";
import ProductCard from "../components/card/ProductCard";
import { Bottomtabs } from "../config/Tab";
import { ProductType } from "../types/loadedData";
import { useProducts } from "../hooks/useProducts";
import Images from "../config/Images";
import ProductCardShimmer from "../components/shimmer/ProductCardShimmer";

function HomeScreen({ navigation, route }: LoadedHomeScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { getProducts } = useProducts();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { products } = useSelector((state: RootState) => state.product);

  //states
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [loadedProducts, setLoadedProducts] = useState<ProductType[]>(products);

  useEffect(() => {
    setLoadedProducts(products);
  }, [products]);

  useEffect(() => {
    if (!searchValue) {
      setLoadedProducts(products);
    }
  }, [searchValue]);

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Home,
    onFocus: async () => await getProducts({ setLoading: setLoading }, {}),
  });
  const OnSearchValueChange = (text: string) => {
    setSearchValue(text);
  };

  const handleRefresh = async () => {
    await getProducts({ setLoading: setRefreshing }, { reload: true });
  };

  const handleSearch = async () => {
    const searchedProducts = await getProducts(
      { setLoading: setLoading, search: searchValue },
      { local: true }
    );
    if (searchedProducts) setLoadedProducts(searchedProducts);
  };

  const { searchPlaceholderText } = appCopy.HomeScreen;

  return (
    <Screen
      safeAreaPadding={false}
      screenColor={Color.secondary}
      header={
        <View style={styles.header}>
          <PrimaryInput
            containerStyle={styles.searchBar}
            placeholder={searchPlaceholderText}
            value={searchValue}
            onChangeText={OnSearchValueChange}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            leftIcon={
              <IconFeather name="search" size={20} color={Color.inputBorder} />
            }
          />
        </View>
      }
    >
      {loading ? (
        <FlatList
          data={Array(10).fill("")}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => <ProductCardShimmer />}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
        />
      ) : (
        <>
          {!loadedProducts || loadedProducts.length === 0 ? (
            <View style={styles.empty}>
              <Image style={styles.image} source={Images.emptyProductsImage} />
            </View>
          ) : (
            <FlatList
              data={loadedProducts}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item }) => <ProductCard product={item} />}
              columnWrapperStyle={{
                justifyContent: "space-between",
              }}
            />
          )}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  header: {
    paddingBottom: 10,
    paddingTop: (statusBarHeight as number) + 20,
  },
  searchBar: {
    width: ContainerWidth,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: ScreenWidth * 0.6,
    resizeMode: "contain",
  },
});

export default HomeScreen;
