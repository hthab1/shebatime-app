import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { Screens } from "../config/Screens";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrdersScreen from "../screens/OrdersScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 0,
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 0,
            },
          },
        },
      }}
      initialRouteName={Screens.HomeScreen as string}
    >
      <Stack.Screen
        name={Screens.HomeScreen as string}
        component={HomeScreen}
      />
      <Stack.Screen
        name={Screens.ProductScreen as string}
        component={ProductScreen}
      />
      <Stack.Screen
        name={Screens.CartScreen as string}
        component={CartScreen}
      />
      <Stack.Screen
        name={Screens.CheckoutScreen as string}
        component={CheckoutScreen}
      />
      <Stack.Screen
        name={Screens.OrdersScreen as string}
        component={OrdersScreen}
      />
      <Stack.Screen
        name={Screens.SettingScreen as string}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
