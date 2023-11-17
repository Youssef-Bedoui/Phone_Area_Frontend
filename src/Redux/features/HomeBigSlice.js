import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  article: [],
  status: "idle",
  error: null,
};

export const fetchTopBigArticle = createAsyncThunk(
  "topBigArticle/fetchTopBigArticle",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeBigArticle/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const topBigArticleSlice = createSlice({
  name: "topBigArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopBigArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopBigArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload[0];
      })
      .addCase(fetchTopBigArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const topBigArticleActions = {
  ...topBigArticleSlice.actions,
  fetchTopBigArticle,
};

export default topBigArticleSlice.reducer;
