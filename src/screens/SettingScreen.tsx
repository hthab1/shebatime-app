import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedSettingScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import Color from "../config/Colors";
import { ContainerWidth, ScreenHeight, ScreenWidth } from "../utils/consts";
import { Bottomtabs } from "../config/Tab";
import { useLogout } from "../hooks/useLogout";
import useUser from "../hooks/useUser";
import IconFeather from "@expo/vector-icons/Feather";
import GlobalLoadingModal from "../components/modal/GlobalLoadingModal";
import Images from "../config/Images";

function SettingScreen({ navigation, route }: LoadedSettingScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const logout = useLogout();
  const { deleteUser, updateUser } = useUser();
  const { selectGender } = useUser();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { userGender, userPhone, user } = useSelector(
    (state: RootState) => state.user
  );

  useOnLoadScreen({
    tabVisibility: true,
    tabActive: Bottomtabs.Setting,
  });

  const {
    deleteAccountButtonText,
    deleteAccountSubTitleText,
    deleteAccountTitle,
    feminineChoiceText,
    logoutText,
    maculineChoiceText,
    subTitleText,
    titleText,
    countryCodeText,
    phoneNumberText,
    deleteAlertSubTitle,
    deleteAlertTitle,
    alertNo,
    alertYes,
  } = appCopy.SettingScreen;

  const onMasculineChoose = async () => {
    selectGender("masculine");
    await updateUser({ gender: "male" });
  };

  const onFeminineChoose = async () => {
    selectGender("feminine");
    await updateUser({ gender: "female" });
  };

  const handleLogout = () => {
    logout();
  };

  const handleDeleteAccount = () => {
    Alert.alert(deleteAlertTitle, deleteAlertSubTitle, [
      {
        text: alertNo,
        style: "cancel",
      },
      {
        text: alertYes,
        onPress: () => deleteUser({}),
      },
    ]);
  };

  return (
    <Screen
      safeAreaPadding={false}
      scroll
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
      <GlobalLoadingModal />
      <View style={styles.content}>
        <CustomText marginTop={30}>{phoneNumberText}</CustomText>
        <View style={[styles.button, styles.phone]}>
          <CustomText small color={Color.secondaryText} marginLeft={10}>
            {countryCodeText}
            {userPhone}
          </CustomText>
        </View>
        <CustomText marginTop={20} marginBottom={20}>
          {subTitleText}
        </CustomText>
        <TouchableOpacity
          onPress={onFeminineChoose}
          style={[
            styles.card,
            userGender === "feminine" && styles.cardSelected,
          ]}
        >
          <Image source={Images.chooseFemaleImage} style={styles.image} />
          <CustomText medium>{feminineChoiceText}</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onMasculineChoose}
          style={[
            styles.card,
            userGender === "masculine" && styles.cardSelected,
          ]}
        >
          <Image source={Images.chooseMaleImage} style={styles.image} />
          <CustomText medium>{maculineChoiceText}</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={[styles.button]}>
          <IconFeather name="power" size={16} color={Color.accent} />
          <CustomText small color={Color.accent} marginLeft={10}>
            {logoutText}
          </CustomText>
        </TouchableOpacity>
        <CustomText small bold width={ContainerWidth}>
          {deleteAccountTitle}
        </CustomText>
        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={[styles.button, styles.deleteButton]}
        >
          <IconFeather name="trash-2" size={16} color={Color.accent} />
          <CustomText small color={Color.accent} marginLeft={10}>
            {deleteAccountButtonText}
          </CustomText>
        </TouchableOpacity>
        <CustomText xsmall color={Color.secondaryText}>
          {deleteAccountSubTitleText}
        </CustomText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // flex: 1,
    backgroundColor: Color.secondary,
    width: ScreenWidth,
  },
  content: {
    flex: 1,
    width: ContainerWidth,
    paddingBottom: 100,
  },
  contentHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  header: {
    paddingTop: (statusBarHeight as number) + 20,
  },
  card: {
    width: "100%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.white,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardSelected: {
    borderWidth: 1,
    borderColor: Color.primary,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 40,
    width: ContainerWidth,
  },
  deleteButton: {
    marginBottom: 10,
    marginTop: 20,
  },
  phone: {
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default SettingScreen;
