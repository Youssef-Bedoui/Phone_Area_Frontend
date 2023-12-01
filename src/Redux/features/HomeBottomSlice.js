import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  articles: [],
  selectedArticle: {},
  status: "idle",
  error: null,
};

export const fetchHomeBottomArticles = createAsyncThunk(
  "homeBottom/fetchHomeBottomArticles",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeBottomArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getHomeBottomArticleById = createAsyncThunk(
  "homeBottom/getHomeBottomArticleById",
  async (articleId) => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeBottomArticles/articles/${articleId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const homeBottomSlice = createSlice({
  name: "homeBottom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeBottomArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeBottomArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchHomeBottomArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getHomeBottomArticleById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHomeBottomArticleById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedArticle = action.payload; 
      })
      .addCase(getHomeBottomArticleById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const homeBottomActions = {
  ...homeBottomSlice.actions,
  getHomeBottomArticleById,
};

export default homeBottomSlice.reducer;
