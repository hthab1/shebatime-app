import { NavigatorInterface, ScreenInterface } from "../declarations/screen";

export const Screens: ScreenInterface = {
  SplashScreen: "SplashScreen",
  WelcomeScreen: "WelcomeScreen",
  LoginScreen: "LoginScreen",
  OTPScreen: "OTPScreen",
  HomeScreen: "HomeScreen",
  ProductScreen: "ProductScreen",
  CartScreen: "CartScreen",
  CheckoutScreen: "CheckoutScreen",
  OrdersScreen: "OrdersScreen",
  SettingScreen: "SettingScreen",
};

export const Navigators: NavigatorInterface = {
  AuthenticationNavigator: "AuthenticationNavigator",
  LoggedInNavigator: "LoggedInNavigator",
  MainNavigator: "MainNavigator",
};
