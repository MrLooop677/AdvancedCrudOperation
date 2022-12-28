import { createSlice } from "@reduxjs/toolkit";
const initialState = { id: 1, isLogin: true };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
export default authSlice.reducer;
