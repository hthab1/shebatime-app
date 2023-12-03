import FontSize, { FontFamily, LineHeight } from "../config/Font";
import { FontSizeBooleanTypes } from "../declarations/text";
import {
  FontFamilyType,
  FontSizeType,
  LineHeightType,
  TextType,
} from "../types/text";

export function getTextLineHeight(
  lineHeight?: LineHeightType
): number | undefined {
  let textHeight: number | undefined;
  switch (lineHeight) {
    case "xxsmall":
      textHeight = LineHeight.xxsmall;
      break;
    case "xxsmallL":
      textHeight = LineHeight.xxsmallL;
      break;
    case "xsmall":
      textHeight = LineHeight.xsmall;
      break;
    case "xsmallL":
      textHeight = LineHeight.xsmallL;
      break;
    case "small":
      textHeight = LineHeight.small;
      break;
    case "smallL":
      textHeight = LineHeight.smallL;
      break;
    case "smallMedium":
      textHeight = LineHeight.smallMedium;
      break;
    case "smallMediumL":
      textHeight = LineHeight.smallMediumL;
      break;
    case "medium":
      textHeight = LineHeight.medium;
      break;
    case "mediumL":
      textHeight = LineHeight.mediumL;
      break;
    case "large":
      textHeight = LineHeight.large;
      break;
    case "largeL":
      textHeight = LineHeight.largeL;
      break;
    case "xlarge":
      textHeight = LineHeight.xlarge;
      break;
    case "xlargeL":
      textHeight = LineHeight.xlargeL;
      break;
    case "xxlarge":
      textHeight = LineHeight.xxlarge;
    case "xxlargeL":
      textHeight = LineHeight.xxlargeL;
      break;
    default:
      break;
  }
  return textHeight;
}

export function getTextFontSize(
  fontSize?: FontSizeType,
  Sizes?: FontSizeBooleanTypes
): number | undefined {
  let size: number | undefined;

  if (Sizes?.xxsmall) {
    return FontSize.xxsmall;
  }
  if (Sizes?.xsmall) {
    return FontSize.xsmall;
  }
  if (Sizes?.small) {
    return FontSize.small;
  }
  if (Sizes?.smallMedium) {
    return FontSize.smallMedium;
  }
  if (Sizes?.medium) {
    return FontSize.medium;
  }
  if (Sizes?.large) {
    return FontSize.large;
  }
  if (Sizes?.xlarge) {
    return FontSize.xlarge;
  }
  if (Sizes?.xxlarge) {
    return FontSize.xxlarge;
  }

  switch (fontSize) {
    case "xxsmall":
      size = FontSize.xxsmall;
      break;
    case "xsmall":
      size = FontSize.xsmall;
      break;
    case "small":
      size = FontSize.small;
      break;
    case "smallMedium":
      size = FontSize.smallMedium;
      break;
    case "medium":
      size = FontSize.medium;
      break;
    case "large":
      size = FontSize.large;
      break;
    case "xlarge":
      size = FontSize.xlarge;
      break;
    case "xxlarge":
      size = FontSize.xxlarge;
      break;
    default:
      size = FontSize.small;
      break;
  }
  return size;
}

export function getTextFontFamily(type?: TextType): FontFamilyType {
  let fontFamily: FontFamilyType;
  switch (type) {
    case "bold":
      fontFamily = "Inter700";
      break;

    case "normal":
      fontFamily = "Inter";
      break;

    default:
      fontFamily = "Inter";
      break;
  }
  return fontFamily;
}
