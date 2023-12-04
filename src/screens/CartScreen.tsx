import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedCartScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import Color from "../config/Colors";
import { ContainerWidth, ScreenHeight, ScreenWidth } from "../utils/consts";
import Checkbox from "../components/common/Checkbox";
import CartCard from "../components/card/CartCard";
import { Bottomtabs } from "../config/Tab";
import { CartItemType } from "../types/loadedData";
import CartSelectedCalculationCard from "../components/card/CartSelectedCalculationCard";
import IconMaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import useCart from "../hooks/useCart";

function CartScreen({ navigation, route }: LoadedCartScreenParams) {
  const navigate = useCustomNavigation();
  const { selectAllItemsInCart, UnSelectAllItemsInCart } = useCart();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  //states
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Cart,
  });

  const OnSelectAll = () => {
    if (selectAll) {
      setSelectAll(false);
      UnSelectAllItemsInCart();
    } else {
      setSelectAll(true);
      selectAllItemsInCart();
    }
  };

  const OnSelect = (item: CartItemType) => {};

  const { noItemsText, selectAllText, titleText } = appCopy.CartScreen;

  return (
    <Screen
      safeAreaPadding={false}
      screenColor={Color.white}
      contentContainerStyle={styles.container}
      header={
        <View style={styles.header}>
          <CustomText width={ContainerWidth} large bold marginBottom={10}>
            {titleText}
          </CustomText>
        </View>
      }
      footer={<CartSelectedCalculationCard />}
    >
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <CustomText
            marginBottom={10}
            marginTop={10}
            marginRight={10}
            color={selectAll ? Color.accent : Color.primary}
            onPress={OnSelectAll}
            suppressHighlighting
          >
            {selectAllText}
          </CustomText>
          <Checkbox
            onPress={OnSelectAll}
            selected={selectAll}
            marginBottom={10}
            marginTop={12}
          />
        </View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlist}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => (
              <CartCard onSelect={OnSelect} cart={item} index={index} />
            )}
          />
        ) : (
          <View style={styles.noItems}>
            <IconMaterialCommunityIcons
              name="cart-remove"
              size={ScreenWidth * 0.4}
              color={Color.black50}
            />
            <CustomText marginBottom={ScreenHeight * 0.1}>
              {noItemsText}
            </CustomText>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.secondary,
    width: ScreenWidth,
  },
  content: {
    flex: 1,
    width: ContainerWidth,
  },
  contentHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  header: {
    paddingTop: (statusBarHeight as number) + 20,
  },
  flatlist: {
    paddingBottom: 60,
  },
  noItems: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default CartScreen;
