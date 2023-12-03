import FontSize, { LineHeight } from "../config/Font";

export type FontSizeType = keyof typeof FontSize;

export type LineHeightType = keyof typeof LineHeight;

export type FontFamilyType = "Inter" | "Inter700";

export type TextType = "normal" | "bold";
