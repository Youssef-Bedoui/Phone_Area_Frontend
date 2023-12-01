import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  showSearchModal: false,
  articles: [],
  searchedArticles: [],
  selectedArticle: {},
  status: "idle",
  error: null,
};

export const fetchHomeArticles = createAsyncThunk(
  "home/fetchHomeArticles",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  "home/fetchArticleById",
  async (articleId) => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/HomeArticles/articles/${articleId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchNews = createAsyncThunk("search/news", async (value) => {
  try {
    const response = await axios.get(
      `${config.SERVER_URL}/search/news/${value}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    showSearchModal: (state) => {
      state.showSearchModal = true;
    },
    hideSearchModal: (state) => {
      state.showSearchModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHomeArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchHomeArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchedArticles = action.payload;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { showSearchModal, hideSearchModal } = homeSlice.actions;

export default homeSlice.reducer;
