import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tabType } from "../types/tab";
import { ScreenType } from "../declarations/screen";
import { Screens } from "../config/Screens";
import { AppCopyInterface, MainCopy } from "../copy/AppCopy";

interface UiState {
  tabVisible: boolean;
  tabActive: tabType;
  appCopy: AppCopyInterface;
  visibleUi: ScreenType;
}

const initialState: UiState = {
  tabVisible: true,
  tabActive: "Home",
  appCopy: MainCopy,
  visibleUi: Screens.HomeScreen,
};

export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTabVisibility: (state, action: PayloadAction<boolean>) => {
      state.tabVisible = action.payload;
    },
    setTabActive: (state, action: PayloadAction<tabType>) => {
      state.tabActive = action.payload;
    },
    setAppCopy: (state, action: PayloadAction<AppCopyInterface>) => {
      state.appCopy = action.payload;
    },
    setVisibleUi: (state, action: PayloadAction<ScreenType>) => {
      state.visibleUi = action.payload;
    },
  },
});

export const { setTabVisibility, setAppCopy, setTabActive, setVisibleUi } =
  ui.actions;

export default ui.reducer;
