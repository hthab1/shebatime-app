import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedOrdersScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import Color from "../config/Colors";
import { ContainerWidth, ScreenHeight, ScreenWidth } from "../utils/consts";
import { Bottomtabs } from "../config/Tab";
import IconMaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ordersPlaceholderData } from "../../placeholder";
import OrderCard from "../components/card/OrderCard";
import useOrder from "../hooks/useOrders";
import { OrderType } from "../types/loadedData";
import OrderCardShimmer from "../components/shimmer/OrderCardShimmer";

function OrdersScreen({ navigation, route }: LoadedOrdersScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { getOrders } = useOrder();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { orders } = useSelector((state: RootState) => state.order);

  //states
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [loadedOrders, setLoadedOrders] = useState<OrderType[]>(orders);

  useEffect(() => {
    setLoadedOrders(orders);
  }, [orders]);

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Orders,
    onFocus: async () => await getOrders({ setLoading: setLoading }, {}),
  });

  const handleRefresh = async () => {
    await getOrders({ setLoading: setRefreshing }, { reload: true });
  };

  const { titleText, noOrdersText } = appCopy.OrdersScreen;

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
    >
      <View style={styles.content}>
        {loading ? (
          <FlatList
            data={Array(6).fill("")}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatlist}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item }) => <OrderCardShimmer />}
          />
        ) : (
          <>
            {loadedOrders.length > 0 ? (
              <FlatList
                data={loadedOrders}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                  />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlist}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => <OrderCard order={item} />}
              />
            ) : (
              <View style={styles.noItems}>
                <IconMaterialCommunityIcons
                  name="clipboard-list-outline"
                  size={ScreenWidth * 0.4}
                  color={Color.black50}
                />
                <CustomText marginBottom={ScreenHeight * 0.1}>
                  {noOrdersText}
                </CustomText>
              </View>
            )}
          </>
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

export default OrdersScreen;
