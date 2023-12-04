export interface AppCopyInterface {
  WelcomeScreen: {
    titleText: string;
    companyNameText: string;
    taglineText: string;
    maculineChoiceText: string;
    feminineChoiceText: string;
  };
  LoginScreen: {
    titleText: string;
    subTitleText: string;
    countryCodeText: string;
    phoneNumberPlaceholderText: string;
    continueButtonText: string;
    invalidPhoneNumberErrorText: string;
  };
  OTPScreen: {
    titleText: string;
    subtitleText: string;
    notRecievedQuestionText: string;
    resendText: string;
    recendAllowedInText: string;
    continueButtonText: string;
    notCompleteErrorText: string;
    invalidErrorText: string;
  };
  HomeScreen: {
    searchPlaceholderText: string;
  };
  ProductScreen: {
    addToCartText: string;
    descriptionText: string;
    howToUseText: string;
  };
  CartScreen: {
    titleText: string;
    selectAllText: string;
    cartItemsText: string;
    cartItemText: string;
    continueButtonText: string;
    selectedText: string;
    noItemsText: string;
  };
  CheckoutScreen: {
    deliveryAddressText: string;
    deliveryAddressPlaceholderText: string;
    requiredErrorText: string;
    orderSummaryText: string;
    orderTotalText: string;
    continueButtonText: string;
    modalTitleText: string;
    modalSubTitleText: string;
    modalCloseButtonText: string;
  };
  OrdersScreen: {
    titleText: string;
    orderDateText: string;
    orderTotalPriceText: string;
  };
  SettingScreen: {
    titleText: string;
    subTitleText: string;
    maculineChoiceText: string;
    feminineChoiceText: string;
  };
}

export const MainCopy: AppCopyInterface = {
  WelcomeScreen: {
    titleText: "Welcome to",
    companyNameText: "Shebatime",
    taglineText: "A place to buy high quality cosmetics",
    maculineChoiceText: "Male",
    feminineChoiceText: "Female",
  },
  LoginScreen: {
    titleText: "Enter your phone number",
    subTitleText: "We'll send a one-time code to verify your identity.",
    countryCodeText: "+251",
    phoneNumberPlaceholderText: "Phone number",
    continueButtonText: "Continue",
    invalidPhoneNumberErrorText: "Invalid phone number",
  },
  OTPScreen: {
    titleText: "You’ve Got SMS",
    subtitleText: "Verify your identity with the code received via SMS.",
    notRecievedQuestionText: "Didn't recieve code?",
    resendText: "Resend",
    recendAllowedInText: "You can resend code in",
    continueButtonText: "Continue",
    invalidErrorText: "The OTP you entered is incorrect. Please try again.",
    notCompleteErrorText: "Please fill in all the OTP fields before verifying.",
  },
  HomeScreen: {
    searchPlaceholderText: "Search",
  },
  ProductScreen: {
    addToCartText: "Add to cart",
    descriptionText: "Description",
    howToUseText: "How to use",
  },
  CartScreen: {
    titleText: "Cart",
    selectAllText: "Select all",
    cartItemsText: "Items",
    cartItemText: "Item",
    continueButtonText: "Continue",
    selectedText: "Selected",
    noItemsText: "No items in your cart",
  },
  CheckoutScreen: {
    deliveryAddressText: "Delivery Address",
    deliveryAddressPlaceholderText:
      "Where do you like for your items to be delivered?",
    requiredErrorText: "Delivery Address is required",
    orderSummaryText: "Order Summary",
    orderTotalText: "Order Total",
    continueButtonText: "Checkout",
    modalTitleText: "Thank you for your order",
    modalSubTitleText: "We will be calling you shortly to confirm your order",
    modalCloseButtonText: "Close",
  },
  OrdersScreen: {
    titleText: "Orders",
    orderDateText: "Order Date",
    orderTotalPriceText: "Total Price",
  },
  SettingScreen: {
    titleText: "Setting",
    subTitleText: "Select what kind of products you are interested in",
    maculineChoiceText: "For Men",
    feminineChoiceText: "For Women",
  },
};
