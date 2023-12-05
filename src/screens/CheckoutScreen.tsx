import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/container/Screen";
import useCustomNavigation from "../hooks/useCustomNavigation";
import { LoadedCheckoutScreenParams } from "../declarations/loadedScreenParams";
import { useDispatch, useSelector } from "react-redux";
import useOnLoadScreen from "../hooks/useOnLoadScreen";
import { RootState } from "../app/store";
import CustomText from "../components/text/CustomText";
import HeaderWithBackOnly from "../components/header/HeaderWithBackOnly";
import PrimaryButton from "../components/button/PrimaryButton";
import PrimaryInput from "../components/input/PrimaryInput";
import Color from "../config/Colors";
import { getPrice } from "../function/text";
import useCart from "../hooks/useCart";
import ErrorText from "../components/text/ErrorText";
import { setThankYouModal } from "../reducers/modalReducer";
import ThankYouModal from "../components/modal/ThankYouModal";

function CheckoutScreen({ navigation, route }: LoadedCheckoutScreenParams) {
  const navigate = useCustomNavigation();
  const { calculateTotalSelectedPrice } = useCart();
  const dispatch = useDispatch();
  const { appCopy } = useSelector((state: RootState) => state.ui);
  const { selectedCartItems, cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  //states
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");

  useOnLoadScreen({
    tabVisibility: false,
  });

  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [address]);

  const OnAddressChange = (text: string) => {
    setAddress(text);
  };

  const {
    continueButtonText,
    deliveryAddressText,
    deliveryAddressPlaceholderText,
    orderSummaryText,
    orderTotalText,
    requiredErrorText,
  } = appCopy.CheckoutScreen;

  const OnCheckout = () => {
    if (!address) return setError(requiredErrorText);
    dispatch(setThankYouModal(true));
  };

  return (
    <Screen
      safeArea
      scroll
      screenColor={Color.secondary}
      header={<HeaderWithBackOnly />}
      footer={
        <PrimaryButton
          label={continueButtonText}
          primary
          onPress={OnCheckout}
        />
      }
    >
      <ThankYouModal />
      <CustomText marginTop={20}>{deliveryAddressText}</CustomText>
      <PrimaryInput
        value={address}
        onChangeText={OnAddressChange}
        marginTop={15}
        containerStyle={styles.input}
        placeholder={deliveryAddressPlaceholderText}
      />
      <ErrorText visible={error} error={error} marginTop={5} />
      <CustomText marginTop={20} marginBottom={10} bold>
        {orderSummaryText}
      </CustomText>
      {selectedCartItems.map((item, index) => (
        <View style={styles.row} key={index}>
          <CustomText>
            x{cartItems[item].quantity} {cartItems[item].productName}
          </CustomText>
          <CustomText>
            {getPrice(cartItems[item].price * cartItems[item].quantity)}
          </CustomText>
        </View>
      ))}
      <CustomText marginTop={20} marginBottom={10} bold>
        {orderTotalText}: {getPrice(calculateTotalSelectedPrice())}
      </CustomText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderWidth: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default CheckoutScreen;
