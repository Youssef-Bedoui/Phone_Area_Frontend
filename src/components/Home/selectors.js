// selectors.js
import { createSelector } from "reselect";

// Selectors for raw data
const selectHomeBig = (state) => state.HomeBig.article;
const selectHomeRight = (state) => state.HomeRight.articles;
const selectHomeBottom = (state) => state.HomeBottom.articles;
const selectHome = (state) => state.HomeArticles.articles;
const selectReviews = (state) => state.Reviews.reviews;

// Memoized selectors
export const selectMainArticle = createSelector(
  [selectHomeBig],
  (mainArticle) => mainArticle
);

export const selectRightArticles = createSelector(
  [selectHomeRight],
  (rightArticles) => rightArticles
);

export const selectBottomArticles = createSelector(
  [selectHomeBottom],
  (bottomArticles) => bottomArticles
);

export const selectHomeArticles = createSelector(
  [selectHome],
  (homeArticles) => homeArticles
);
export const selectReviewsArticles = createSelector(
  [selectReviews],
  (selectReviews) => selectReviews
);
