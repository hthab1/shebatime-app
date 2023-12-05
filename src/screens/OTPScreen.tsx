import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Screen, { statusBarHeight } from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedOTPScreenParams } from "../declarations/loadedScreenParams";
import HeaderWithBackOnly from "../components/header/HeaderWithBackOnly";
import CustomText from "../components/text/CustomText";
import AlignmentStyles from "../styles/AlignmentStyle";
import PrimaryButton from "../components/button/PrimaryButton";
import OTPInput from "../components/input/OTPInput";
import ErrorText from "../components/text/ErrorText";
import { ScreenHeight } from "../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserPhone } from "../reducers/userReducer";
import { cacheItem } from "../utils/storage";
import { RootState } from "../app/store";
import Color from "../config/Colors";

function OTPScreen({ route }: LoadedOTPScreenParams) {
  const navigate = useCustomNavigation();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);

  const {
    continueButtonText,
    resendText,
    titleText,
    notRecievedQuestionText,
    recendAllowedInText,
    subtitleText,
    invalidErrorText,
    notCompleteErrorText,
  } = appCopy.OTPScreen;

  const phone = route?.params?.phone;

  //states
  const [verifying, setVerifying] = useState<boolean>(false);
  const [resending, setResending] = useState<boolean>(false);
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [numberOfSeconds, setNumberOfSeconds] = useState<number>(60);
  const [otpValue, setOtpValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  let secondText = "s";
  let numberOfOTPCharacters = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setNumberOfSeconds((prevNumberOfSeconds) => {
        if (prevNumberOfSeconds === 0) {
          clearInterval(timer);
          setTimerActive(false);
          return prevNumberOfSeconds;
        }
        return prevNumberOfSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [numberOfSeconds]);

  const handleSetOpt = (otp: string) => {
    setOtpValue(otp);
    setError("");
  };

  const handleResend = async (): Promise<void> => {};

  const handleVerify = async (otp: string): Promise<void> => {
    if (otp.length < numberOfOTPCharacters) {
      setError(notCompleteErrorText);
    }
    dispatch(setUser(phone));
    dispatch(setUserPhone(phone));
    await cacheItem("user", phone || "");
    await cacheItem("phone", phone || "");
  };

  const handleDone = async () => {};

  return (
    <Screen
      safeArea
      scroll
      header={<HeaderWithBackOnly marginTop={20} marginBottom={10} />}
    >
      <CustomText fontFamily="Inter700" fontSize="large" marginTop={40}>
        {titleText}
      </CustomText>
      <CustomText color={Color.secondaryText} marginBottom={40} marginTop={20}>
        {subtitleText}
      </CustomText>
      <OTPInput
        numberOfInputs={numberOfOTPCharacters}
        onOtpFilled={(otp) => handleVerify(otp)}
        setOtp={(otp) => handleSetOpt(otp)}
        marginTop={0}
      />
      <View style={[AlignmentStyles.flex, styles.content]}>
        <ErrorText
          visible
          error={error}
          style={styles.errorStyle}
          marginTop={10}
        />
        <CustomText color={Color.accent} marginTop={ScreenHeight * 0.1}>
          {notRecievedQuestionText}
        </CustomText>
        {timerActive ? (
          <View style={styles.secondContainer}>
            <CustomText color={Color.secondaryText} marginTop={10}>
              {recendAllowedInText}
              {numberOfSeconds}
              {secondText}
            </CustomText>
          </View>
        ) : (
          <>
            {resending ? (
              <ActivityIndicator style={styles.resendActivityIncicator} />
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <CustomText color={Color.secondaryText} marginTop={10}>
                  {resendText}
                </CustomText>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <PrimaryButton
        label={continueButtonText}
        primary
        loading={verifying}
        onPress={() => handleVerify(otpValue)}
        marginTop={10}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  errorStyle: {
    textAlign: "center",
    width: "100%",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendActivityIncicator: {
    marginTop: 10,
  },
});

export default OTPScreen;
