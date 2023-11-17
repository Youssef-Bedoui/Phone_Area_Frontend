import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  reviews: [],
  searchedArticles: [],
  selectedReview: null,
  status: "idle",
  error: null,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/ReviewsArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchReviewById = createAsyncThunk(
  "reviews/fetchReviewById",
  async (reviewId) => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/ReviewsArticles/articles/${reviewId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchReviews = createAsyncThunk(
  "search/reviews",
  async (value) => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/search/reviews/${value}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchReviewById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviewById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedReview = action.payload;
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchReviews.pending, (state) => {
        state.status = "loading";
      })

      .addCase(searchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchedArticles = action.payload;
      })

      .addCase(searchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const reviewsActions = reviewsSlice.actions;

export default reviewsSlice.reducer;
