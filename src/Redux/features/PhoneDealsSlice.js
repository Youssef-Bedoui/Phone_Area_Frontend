import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  dealsArticles: [],
  status: "idle",
  error: null,
};

export const fetchPhoneDealsArticles = createAsyncThunk(
  "phones/fetchPhoneDealsArticles",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/DealsArticles/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const filterDeals = createAsyncThunk(
  "phones/filterDeals",
  async ({ category, value }, { getState }) => {
    const state = getState().PhoneDeals;
    const filteredDeals = state.dealsArticles.filter(
      (deal) => deal[category] === value || deal[category].includes(value)
    );
    return filteredDeals;
  }
);

const DealsSlice = createSlice({
  name: "PhoneDeals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoneDealsArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhoneDealsArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dealsArticles = action.payload;
      })
      .addCase(fetchPhoneDealsArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error(action.error);
      })
      .addCase(filterDeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterDeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dealsArticles = action.payload.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );;
      })
      .addCase(filterDeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});

export default DealsSlice.reducer;
