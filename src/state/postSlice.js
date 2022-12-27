import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "posts/fetchData",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3009/data");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { posts: [], loading: false, error: null };
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch Data
    [fetchData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(...action.payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Post Data
    // Delete Data
    // Edit Data
  },
});
export default postSlice.reducer;
