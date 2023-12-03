import { tabType } from "../types/tab";
import { MarginVerticalProps } from "./common";

export interface CustomTabItemProps {
  tabIcon: ReactNode;
  tabActiveIcon: ReactNode;
  active: boolean;
  onPress?: () => void;
  top?: boolean;
  numberOfContent?: number;
  tab?: tabType;
}
