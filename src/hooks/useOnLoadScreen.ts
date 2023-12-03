import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setTabActive,
  setTabVisibility,
  setVisibleUi,
} from "../reducers/uiReducer";
import { tabType } from "../types/tab";
import { ScreenType } from "../declarations/screen";

interface useOnLoadScreenProps {
  tabVisibility?: boolean;
  tabActive?: tabType;
  visibleScreen?: ScreenType;
  setShowList?: (showList: boolean) => void;
  setShowAllList?: (showAllList: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function useOnLoadScreen(screenData: useOnLoadScreenProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    tabVisibility,
    visibleScreen,
    onBlur,
    onFocus,
    setShowList,
    tabActive,
    setShowAllList,
  } = screenData;

  useEffect(() => {
    const focused = navigation?.addListener("focus", () => {
      tabVisibility !== undefined && dispatch(setTabVisibility(tabVisibility));
      visibleScreen && dispatch(setVisibleUi(visibleScreen));
      tabActive && dispatch(setTabActive(tabActive));
      onFocus && onFocus();
      setShowList &&
        setTimeout(() => {
          setShowList(true);
        }, 0);
      setShowAllList &&
        setTimeout(() => {
          setShowAllList(true);
        }, 5);
    });

    return focused;
  }, [
    tabVisibility,
    visibleScreen,
    tabActive,
    onFocus,
    setShowList,
    setShowAllList,
  ]);

  useEffect(() => {
    const unsubscribe = navigation?.addListener("blur", () => {
      onBlur && onBlur();
      setShowList && setShowList(false);
      setShowAllList && setShowAllList(false);
    });

    return unsubscribe;
  }, [onBlur, setShowList, setShowAllList]);
}
