import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserGenderType } from "../types/loadedData";
import { UserType } from "../declarations/userServices";

interface userState {
  user: UserType | null;
  userPhone: string;
  token: string;
  userGender: UserGenderType | null;
}

const initialState: userState = {
  user: null,
  userPhone: "",
  token: "",
  userGender: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    setUserPhone: (state, action: PayloadAction<any>) => {
      state.userPhone = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserGender: (state, action: PayloadAction<UserGenderType | null>) => {
      state.userGender = action.payload;
    },
  },
});

export const { setUser, setUserPhone, setUserGender, setToken } = user.actions;

export default user.reducer;
