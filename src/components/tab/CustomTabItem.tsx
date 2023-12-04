import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CustomTabItemProps } from "../../declarations/tab";
import CustomText from "../text/CustomText";
import { ConvertToNumber } from "../../function/text";
import Color from "../../config/Colors";

export default function CustomTabItem({
  tabActiveIcon,
  tabIcon,
  onPress,
  active,
  numberOfContent,
  top,
  tab,
}: CustomTabItemProps) {
  const BadgeContent = () => {
    let badgeContent: number | string = 0;
    if (!numberOfContent) return <></>;
    if (numberOfContent === 0) return <></>;
    if (ConvertToNumber(numberOfContent) < 100) {
      badgeContent = numberOfContent;
    } else if (ConvertToNumber(numberOfContent) >= 100) {
      badgeContent = "99+";
    }
    return (
      <View style={styles.topContent}>
        <CustomText color={Color.white} fontSize="xxsmall">
          {badgeContent}
        </CustomText>
      </View>
    );
  };

  const handleOnTabSelect = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnTabSelect}>
      {top && <BadgeContent />}
      <View style={styles.iconContainer}>
        {active ? tabActiveIcon : tabIcon}
      </View>
      <CustomText
        color={active ? Color.tabActive : Color.tabInActive}
        fontSize="xxsmall"
        fontFamily={active ? "Inter700" : "Inter"}
        marginTop={2}
      >
        {tab}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconContainer: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  topContent: {
    height: 14,
    backgroundColor: Color.primary,
    position: "absolute",
    top: -2,
    left: "50%",
    zIndex: 99,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});
