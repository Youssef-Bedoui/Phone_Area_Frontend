import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json";

const initialState = {
  appArticles: [],
  searchedArticles: [],
  status: "idle",
  error: null,
};

export const fetchApps = createAsyncThunk(
  "apps/fetchAppsArticles",
  async () => {
    try {
      const response = await axios.get(
        `${config.SERVER_URL}/PhoneApps/articles`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchApps = createAsyncThunk("search/apps", async (value) => {
  try {
    const response = await axios.get(
      `${config.SERVER_URL}/search/apps/${value}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const AppsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApps.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchApps.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.appArticles = action.payload;
    });

    builder.addCase(fetchApps.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(searchApps.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(searchApps.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.searchedArticles = action.payload;
    });

    builder.addCase(searchApps.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const AppsActions = AppsSlice.actions;

export default AppsSlice.reducer;
