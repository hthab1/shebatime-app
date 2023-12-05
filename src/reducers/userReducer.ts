import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserGenderType } from "../types/loadedData";

interface userState {
  user: any;
  userPhone: string | null;
  userGender: UserGenderType | null;
}

const initialState: userState = {
  user: null,
  userPhone: null,
  userGender: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<any>) => {
      state.userPhone = action.payload;
    },
    setUserGender: (state, action: PayloadAction<UserGenderType | null>) => {
      state.userGender = action.payload;
    },
  },
});

export const { setUser, setUserPhone, setUserGender } = user.actions;

export default user.reducer;
