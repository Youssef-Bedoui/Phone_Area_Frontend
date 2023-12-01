// selectors.js
import { createSelector } from "reselect";

// Selectors for raw data
const selectHomeBig = (state) => state.HomeBig.article;
const selectHomeRight = (state) => state.HomeRight.articles;
const selectHomeBottom = (state) => state.HomeBottom.articles;
const selectHome = (state) => state.HomeArticles.articles;
const selectTechNews = (state) => state.TechNews.techNews;

// Memoized selectors
export const selectMainArticle = createSelector(
  [selectHomeBig],
  (mainArticle) => mainArticle
);

export const selectRightArticles = createSelector(
  [selectHomeRight],
  (rightArticles) => {
    const sortedRight = rightArticles.slice().sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return dateB - dateA;
    });

    return sortedRight;
  }
);

export const selectBottomArticles = createSelector(
  [selectHomeBottom],
  (bottomArticles) => {
    const sortedBottom = bottomArticles.slice().sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return dateB - dateA;
    });

    return sortedBottom;
  }
);

export const selectHomeArticles = createSelector(
  [selectHome],
  (homeArticles) => {
    const sortedHome = homeArticles.slice().sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return dateB - dateA;
    });

    return sortedHome;
  }
);
export const selectTechNewssArticles = createSelector([selectTechNews], (techNews) => {
  const sortedTechNews = techNews.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });

  return sortedTechNews;
});
