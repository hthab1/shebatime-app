import { Dimensions } from "react-native";

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const WidthWidth = Dimensions.get("window").width;
export const WidthHeight = Dimensions.get("window").height;

export const ContainerWidth = Dimensions.get("screen").width * 0.95;
export const ContainerPercentWidth = "95%";

export const ContainerPadding = Dimensions.get("screen").width * 0.025;
export const ContainerPercentPadding = "2.5%";

export const SecondaryContainerWidth = Dimensions.get("screen").width * 0.8;
export const SecondaryContainerPercentWidth = "80%";

let today0: Date = new Date();
let yesterday0: Date = new Date();
yesterday0.setDate(yesterday0.getDate() - 1);

export const Today = today0.toISOString();
export const Yesterday = yesterday0.toISOString();

export const Currency = "Birr";
export const CurrencyShort = "Br";
