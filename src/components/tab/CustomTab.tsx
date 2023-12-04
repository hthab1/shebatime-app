import React, { ReactNode, memo, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { ContainerWidth } from "../../utils/consts";
import CustomTabItem from "./CustomTabItem";
import { useDispatch, useSelector } from "react-redux";
import { Bottomtabs } from "../../config/Tab";
import { RootState } from "../../app/store";
import { setTabActive } from "../../reducers/uiReducer";
import useCustomNavigation from "../../hooks/useCustomNavigation";
import Color from "../../config/Colors";
import { tabType } from "../../types/tab";
import IconFeather from "@expo/vector-icons/Feather";

const CustomTab: React.FC = () => {
  const dispatch = useDispatch();
  const { tabActive, tabVisible } = useSelector((state: RootState) => state.ui);
  const navigate = useCustomNavigation();
  const { user } = useSelector((state: RootState) => state.user);

  let tabItemColor = Color.tabInActive;
  let tabItemActiveColor = Color.tabActive;
  let tabItemSize = 20;

  //states
  const [visibleBecauseOfKeyboard, setVisibleBecauseOfKeyboard] =
    useState<boolean>(true);
  const [visibilityBecauseOfScreen, setVisibilityBecauseOfScreen] =
    useState<boolean>(tabVisible);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setVisibleBecauseOfKeyboard(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisibleBecauseOfKeyboard(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [tabActive]);

  useEffect(() => {
    setVisibilityBecauseOfScreen(tabVisible);
  }, [tabVisible]);

  const handleTabSelect = (tab: tabType) => {
    dispatch(setTabActive(tab));
    switch (tab) {
      case Bottomtabs.Home:
        navigate.HomeScreen();
        return;
      case Bottomtabs.Cart:
        navigate.CartScreen();
        return;
      case Bottomtabs.Orders:
        navigate.OrdersScreen();
        return;
      case Bottomtabs.Setting:
        navigate.SettingScreen();
        return;
      default:
        return;
    }
  };

  const tabs: {
    icon: ReactNode;
    activeIcon: ReactNode;
    tab: tabType;
    top: boolean;
    numbeOfContent: number;
  }[] = [
    {
      icon: <IconFeather color={tabItemColor} name="home" size={tabItemSize} />,
      activeIcon: (
        <IconFeather
          name="home"
          color={tabItemActiveColor}
          size={tabItemSize}
        />
      ),
      tab: Bottomtabs.Home,
      top: false,
      numbeOfContent: 0,
    },
    {
      icon: (
        <View style={styles.shoppingCart}>
          <IconFeather
            color={tabItemColor}
            name="shopping-cart"
            size={tabItemSize}
          />
        </View>
      ),
      activeIcon: (
        <View style={styles.shoppingCart}>
          <IconFeather
            name="shopping-cart"
            color={tabItemActiveColor}
            size={tabItemSize}
          />
        </View>
      ),
      tab: Bottomtabs.Cart,
      top: true,
      numbeOfContent: 0,
    },
    {
      icon: <IconFeather color={tabItemColor} name="list" size={tabItemSize} />,
      activeIcon: (
        <IconFeather
          name="list"
          color={tabItemActiveColor}
          size={tabItemSize}
        />
      ),
      tab: Bottomtabs.Orders,
      top: false,
      numbeOfContent: 0,
    },
    {
      icon: (
        <IconFeather color={tabItemColor} name="settings" size={tabItemSize} />
      ),
      activeIcon: (
        <IconFeather
          name="settings"
          color={tabItemActiveColor}
          size={tabItemSize}
        />
      ),
      tab: Bottomtabs.Setting,
      top: false,
      numbeOfContent: 0,
    },
  ];

  return (
    <>
      {visibleBecauseOfKeyboard && visibilityBecauseOfScreen && (
        <View style={styles.container}>
          <View style={styles.content}>
            {tabs.map(
              ({ activeIcon, icon, numbeOfContent, tab, top }, index) => (
                <CustomTabItem
                  key={index}
                  active={tabActive === tab}
                  tab={tab}
                  tabIcon={icon}
                  tabActiveIcon={activeIcon}
                  onPress={() => handleTabSelect(tab)}
                  top={top}
                  numberOfContent={numbeOfContent}
                />
              )
            )}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 40,
    backgroundColor: Color.white,
  },
  content: {
    width: ContainerWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shoppingCart: {
    paddingRight: 5,
  },
});

export default memo(CustomTab);
