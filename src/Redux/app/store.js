import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import HomeBigSlice from "../features/HomeBigSlice";
import HomeRightSlice from "../features/HomeRightSlice";
import HomeBottomSlice from "../features/HomeBottomSlice";
import HomeArtSlice from "../features/HomeSlice";
import TechNewsSlice from "../features/TechNewsSlice";
import PhoneDealsSlice from "../features/PhoneDealsSlice";
import PhoneAppsSlice from "../features/PhoneAppsSlice";

const persistHomeBigConfig = {
  key: "BigArticle",
  storage,
};
const persistHomeRightConfig = {
  key: "RightArticles",
  storage,
};
const persistHomeBotomConfig = {
  key: "BottomArticles",
  storage,
};
const persistHomeConfig = {
  key: "HomeArticles",
  storage,
};
const persistTechNewsConfig = {
  key: "TechNewsArticles",
  storage,
};
const persistDealsConfig = {
  key: "PhoneDealsArticles",
  storage,
};
const persistAppsConfig = {
  key: "AppsArticles",
  storage,
};

const persistedHomeBigReducer = persistReducer(
  persistHomeBigConfig,
  HomeBigSlice
);
const persistedHomeRightReducer = persistReducer(
  persistHomeRightConfig,
  HomeRightSlice
);
const persistedHomeBottomReducer = persistReducer(
  persistHomeBotomConfig,
  HomeBottomSlice
);
const persistedHomeArtReducer = persistReducer(persistHomeConfig, HomeArtSlice);
const persistedTechNewsReducer = persistReducer(
  persistTechNewsConfig,
  TechNewsSlice
);
const persistedDealssReducer = persistReducer(
  persistDealsConfig,
  PhoneDealsSlice
);
const persistedAppsReducer = persistReducer(persistAppsConfig, PhoneAppsSlice);

export default configureStore({
  reducer: {
    HomeBig: persistedHomeBigReducer,
    HomeRight: persistedHomeRightReducer,
    HomeBottom: persistedHomeBottomReducer,
    HomeArticles: persistedHomeArtReducer,
    TechNews: persistedTechNewsReducer,
    PhoneDeals: persistedDealssReducer,
    PhoneApps: persistedAppsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});
