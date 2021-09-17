import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isLogin: false, isheader: true };

const loginSlice = createSlice({
  name: "LoginHandler",
  initialState,
  reducers: {
    LoginHandler: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});
const store = configureStore({
  reducer: loginSlice.reducer,
});
export const loginActions = loginSlice.actions;
export default store;
