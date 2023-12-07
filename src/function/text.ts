import { Currency } from "../utils/consts";

export const hasMoreThanXWords = (
  text?: string,
  numberOfCharacters?: number
): boolean => {
  if (!text) {
    return false;
  }

  if (!numberOfCharacters) return false;

  const words = text.split(" ");
  return words.length > numberOfCharacters;
};

export const Stringify = (value?: any): string => {
  if (typeof value === "string") {
    return value;
  } else if (value === undefined) {
    return "";
  } else {
    return JSON.stringify(value);
  }
};

export const ConvertToNumber = (value?: any): number => {
  if (typeof value === "number") {
    return value;
  } else if (value === undefined) {
    return 0;
  } else {
    return parseInt(value);
  }
};

export const Capitalize = (input?: string): string => {
  if (!input) {
    return "";
  }

  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

export const getPrice = (text?: any): string => {
  if (typeof text === "number") {
    const formattedPrice = text.toLocaleString("en-US");
    return `${formattedPrice} ${Currency}`;
  } else if (typeof text === "string" && !isNaN(Number(text))) {
    const numericValue = Number(text);
    const formattedPrice = numericValue.toLocaleString("en-US");
    return `${formattedPrice} ${Currency}`;
  } else {
    return "";
  }
};

export const thousandSeparator = (text?: any): string => {
  if (typeof text === "number") {
    const formattedPrice = text.toLocaleString("en-US");
    return `${formattedPrice}`;
  } else if (typeof text === "string" && !isNaN(Number(text))) {
    const numericValue = Number(text);
    const formattedPrice = numericValue.toLocaleString("en-US");
    return `${formattedPrice}`;
  } else {
    return "";
  }
};

export const getViews = (views?: any): string => {
  if (views === undefined || views === null || typeof views === "boolean") {
    return "0 Views";
  } else {
    const numericViews = Number(views);
    if (isNaN(numericViews)) {
      return "0 Views";
    } else if (numericViews === 1) {
      return "1 View";
    } else if (numericViews >= 1000000) {
      return `${(numericViews / 1000000).toFixed(1)}M Views`;
    } else if (numericViews >= 1000) {
      return `${(numericViews / 1000).toFixed(1)}K Views`;
    } else {
      return `${numericViews} Views`;
    }
  }
};

export const formatPhoneNumber = (
  phoneNumber: string,
  countryCode?: boolean
): string => {
  if (phoneNumber.length === 9) {
    if (countryCode) {
      return `+251${phoneNumber}`;
    } else {
      return `0${phoneNumber}`;
    }
  } else {
    return phoneNumber;
  }
};
