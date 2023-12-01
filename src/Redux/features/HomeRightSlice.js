// rightSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  articles: [],
  selectedArticle: {},
  status: "idle",
  error: null,
};

export const fetchRightArticles = createAsyncThunk(
  "right/fetchRightArticles",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeRightArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getRightArticleById = createAsyncThunk(
  "right/getRightArticleById",
  async (articleId) => {
    console.log("fetched");
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeRightArticles/articles/${articleId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const rightSlice = createSlice({
  name: "HomeRight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRightArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRightArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchRightArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRightArticleById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRightArticleById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedArticle = action.payload;
      })
      .addCase(getRightArticleById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const rightActions = {
  ...rightSlice.actions,
  getRightArticleById,
};

export default rightSlice.reducer;
