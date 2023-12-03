export type ScreenType = keyof typeof Screens | string;
export type NavigatorType = keyof typeof Navigators | string;

export interface ScreenInterface {
  SplashScreen: ScreenType;
  WelcomeScreen: ScreenType;
  LoginScreen: ScreenType;
  OTPScreen: ScreenType;
  HomeScreen: ScreenType;
  ProductScreen: ScreenType;
  CartScreen: ScreenType;
  CheckoutScreen: ScreenType;
  OrdersScreen: ScreenType;
  SettingScreen: ScreenType;
}

export interface NavigatorInterface {
  AuthenticationNavigator: NavigatorType;
  LoggedInNavigator: NavigatorType;
  MainNavigator: NavigatorType;
}
