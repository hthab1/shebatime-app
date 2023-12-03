import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  user: any;
  userPhone: string | null;
}

const initialState: userState = {
  user: null,
  userPhone: null,
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
  },
});

export const { setUser, setUserPhone } = user.actions;

export default user.reducer;
