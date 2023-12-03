import { useCallback } from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { Screens } from "../config/Screens";
import { ScreenParamList } from "../types/screenParamList";
import {
  WelcomeScreenParams,
  LoginScreenParams,
  OTPScreenParams,
  HomeScreenParams,
  CartScreenParams,
  CheckoutScreenParams,
  OrdersScreenParams,
  ProductScreenParams,
  SettingScreenParams,
  SplashScreenParams,
} from "../declarations/screenParams";

type RouteParams = {
  parent?: {
    dangerouslyGetState: () => {
      index: number;
    };
    dispatch: (action: { type: string; payload: any }) => void;
  };
};

const useCustomNavigation = (): ScreenParamList => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { routeNames, index } = useNavigationState((state) => state);

  const defaultPreviousScreen: any | undefined =
    routeNames[index - 1] || Screens.HomeScreen;

  const WelcomeScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: WelcomeScreenParams = {}) => {
      navigation.navigate(Screens.WelcomeScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const SplashScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: SplashScreenParams = {}) => {
      navigation.navigate(Screens.SplashScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const LoginScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: LoginScreenParams = {}) => {
      navigation.navigate(Screens.LoginScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const OTPScreen = useCallback(
    ({
      previousScreen = defaultPreviousScreen,
      phone,
    }: OTPScreenParams = {}) => {
      navigation.navigate(Screens.OTPScreen as string, {
        previousScreen,
        phone,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const HomeScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: HomeScreenParams = {}) => {
      navigation.navigate(Screens.HomeScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const ProductScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: ProductScreenParams = {}) => {
      navigation.navigate(Screens.ProductScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );
  const CartScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: CartScreenParams = {}) => {
      navigation.navigate(Screens.CartScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );
  const CheckoutScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: CheckoutScreenParams = {}) => {
      navigation.navigate(Screens.CheckoutScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );
  const OrdersScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: OrdersScreenParams = {}) => {
      navigation.navigate(Screens.OrdersScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );
  const SettingScreen = useCallback(
    ({ previousScreen = defaultPreviousScreen }: SettingScreenParams = {}) => {
      navigation.navigate(Screens.SettingScreen as string, {
        previousScreen,
        // parent: navigation,
      });
    },
    [navigation]
  );

  const navigate = useCallback(
    (name: string, params?: { [key: string]: any }) => {
      navigation.navigate(name, { ...params, parent: navigation });
    },
    [navigation]
  );

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener("beforeRemove", () => {
        const parent = route.params?.parent;
        if (parent) {
          const index = parent.dangerouslyGetState().index;
          parent.dispatch({
            type: "REMOVE",
            payload: {
              index,
            },
          });
        }
      });

      return () => {
        unsubscribe();
      };
    }, [navigation, route])
  );

  return {
    SplashScreen,
    WelcomeScreen,
    LoginScreen,
    OTPScreen,
    HomeScreen,
    ProductScreen,
    CartScreen,
    CheckoutScreen,
    OrdersScreen,
    SettingScreen,
    navigate,
    goBack,
  };
};

export default useCustomNavigation;
