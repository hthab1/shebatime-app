import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedHomeScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import Color from "../config/Colors";
import PrimaryInput from "../components/input/PrimaryInput";
import { ContainerWidth } from "../utils/consts";
import IconFeather from "@expo/vector-icons/Feather";
import { productsPlaceholderData } from "../../placeholder";
import ProductCard from "../components/card/ProductCard";
import { Bottomtabs } from "../config/Tab";

function HomeScreen({ navigation, route }: LoadedHomeScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  //states
  const [searchValue, setSearchValue] = useState<string>("");

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Home,
  });
  const OnSearchValueChange = (text: string) => {
    setSearchValue(text);
  };

  const handleSearch = () => {};

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
      <FlatList
        data={productsPlaceholderData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <ProductCard product={item} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
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
});

export default HomeScreen;
