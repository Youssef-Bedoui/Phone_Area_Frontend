import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  techNews: [],
  searchedArticles: [],
  selectedArticle: {},
  status: "idle",
  error: null,
};

export const fetchTechNews = createAsyncThunk(
  "techNews/fetchTechNews",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/TechNewsArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchTechNewsById = createAsyncThunk(
  "techNews/fetchTechNewsById",
  async (id) => {
    console.log(id,"slice")
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/TechNewsArticles/articles/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchTechNews = createAsyncThunk(
  "search/techNews",
  async (value) => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/search/TechNewsArticles/${value}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const techNews = createSlice({
  name: "techNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTechNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.techNews = action.payload;
      })
      .addCase(fetchTechNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTechNewsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTechNewsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedArticle = action.payload;
      })
      .addCase(fetchTechNewsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchTechNews.pending, (state) => {
        state.status = "loading";
      })

      .addCase(searchTechNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchedArticles = action.payload;
      })

      .addCase(searchTechNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const techNewsActions = techNews.actions;

export default techNews.reducer;
