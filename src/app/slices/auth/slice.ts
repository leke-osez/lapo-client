import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootStateType } from "../../store";
import type { UserType } from "../../../libs/schema/user";
import type { InitialAuthStateType } from "./types";

const initialAuthState: InitialAuthStateType = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootStateType) => state.auth.user;

export default authSlice.reducer;
