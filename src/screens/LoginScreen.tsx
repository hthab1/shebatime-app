import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import HeaderWithBackOnly from "../components/header/HeaderWithBackOnly";
import CustomText from "../components/text/CustomText";
import { ContainerWidth, ScreenHeight } from "../utils/consts";
import PrimaryButton from "../components/button/PrimaryButton";
import PrimaryInput from "../components/input/PrimaryInput";
import ErrorText from "../components/text/ErrorText";
import { useDispatch, useSelector } from "react-redux";
import { LoadedLoginScreenParams } from "../declarations/loadedScreenParams";
import { RootState } from "../app/store";
import EthiopianFlagIcon from "../components/icon/EthiopianFlagIcon";
import Color from "../config/Colors";

function LoginScreen({ route }: LoadedLoginScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  //states
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const {
    continueButtonText,
    countryCodeText,
    phoneNumberPlaceholderText,
    subTitleText,
    titleText,
    invalidPhoneNumberErrorText,
  } = appCopy.LoginScreen;

  const handleLogin = async (): Promise<void> => {
    if (phone.length < 9 || !phone) {
      setPhoneError(invalidPhoneNumberErrorText);
      return;
    }
    navigate.OTPScreen({
      phone: phone,
    });
  };

  const handleChangePhoneText = (text: string) => {
    setPhone(text);
    if (phoneError) {
      setPhoneError("");
    }
  };

  return (
    <Screen
      scroll
      safeAreaPadding={false}
      header={
        <HeaderWithBackOnly
          marginTop={(statusBarHeight as number) + 20}
          marginBottom={10}
        />
      }
      footer={
        <PrimaryButton
          label={continueButtonText}
          primary
          marginBottom={30}
          onPress={handleLogin}
        />
      }
    >
      <CustomText fontFamily="Inter700" fontSize="large" marginTop={40}>
        {titleText}
      </CustomText>
      <CustomText fontSize="small" marginTop={10}>
        {subTitleText}
      </CustomText>

      <View style={styles.inputContainer}>
        <View style={styles.countryCodeContainer}>
          <EthiopianFlagIcon />
          <CustomText marginLeft={10}>{countryCodeText}</CustomText>
        </View>
        <PrimaryInput
          placeholder={phoneNumberPlaceholderText}
          value={phone}
          maxLength={9}
          keyboardType="number-pad"
          onChangeText={handleChangePhoneText}
        />
      </View>
      <ErrorText
        marginTop={5}
        visible
        error={phoneError}
        style={styles.error}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: ScreenHeight * 0.85,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ScreenHeight * 0.1,
    paddingBottom: ScreenHeight * 0.05,
  },
  separator: {
    flexDirection: "column",
    flex: 1,
  },
  bottomContent: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  bottomText: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
  },
  inputContainer: {
    width: ContainerWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  inputStyle: {
    flexGrow: 1,
  },
  countryCodeContainer: {
    borderWidth: 1,
    borderColor: Color.inputBorder,
    backgroundColor: Color.inputBackground,
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 15,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
