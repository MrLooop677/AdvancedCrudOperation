import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { posts: [], loading: false, error: null, item: {} };

// fetch Data
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
// delete Data
export const deleteData = createAsyncThunk(
  "posts/deleteData",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/data/${id}`, {
        method: "delete",
      });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// post Data
export const postData = createAsyncThunk(
  "posts/postData",
  async (item, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { authSlice } = getState();
    item.userId = authSlice.id;
    try {
      const res = await fetch("http://localhost:3009/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Detail Data
export const DetailData = createAsyncThunk(
  "posts/DetailData",
  async (itemId, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3009/data/${itemId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Edit Data
export const EditlData = createAsyncThunk(
  "posts/postData",
  async (item, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { authSlice } = getState();
    item.userId = authSlice.id;
    try {
      const res = await fetch(`http://localhost:3009/data/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
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
    [postData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [postData.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
    },
    [postData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete Data
    [deleteData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    [deleteData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // DetailData Data
    [DetailData.pending]: (state) => {
      state.loading = true;
      state.error = null;
      // state.item = null;
    },
    [DetailData.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
      console.log(state.item);
    },
    [DetailData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // EditlData Data
    [EditlData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [EditlData.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
      console.log("EditlData", state.item);
    },
    [EditlData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default postSlice.reducer;
