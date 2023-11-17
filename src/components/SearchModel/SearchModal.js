import React, { useEffect, useState } from "react";
import "./SearchModal.scss";
import CloseIcon from "@mui/icons-material/Close";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHomeArticles,
  hideSearchModal,
  searchNews,
} from "../../Redux/features/HomeSlice";
import { fetchReviews, searchReviews } from "../../Redux/features/ReviewSlice";
import { fetchApps, searchApps } from "../../Redux/features/PhoneAppsSlice";

function SearchModel() {
  const dispatch = useDispatch();
  const NewsArticles = useSelector((state) => state.HomeArticles.articles);
  const ReviewsArticles = useSelector((state) => state.Reviews.reviews);
  const PhoneApps = useSelector((state) => state.PhoneApps.appArticles);

  const NewsSearchArticles = useSelector(
    (state) => state.HomeArticles.searchedArticles
  );
  const ReviewsSearchedArticles = useSelector(
    (state) => state.Reviews.searchedArticles
  );
  const PhoneSearchedApps = useSelector(
    (state) => state.PhoneApps.searchedArticles
  );

  const [searchInp, setSearchInp] = useState("");
  const [activeCategory, setActiveCategory] = useState("News");
  const [recommendedResults, setRecommendedResults] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchInp(inputValue);
    dispatch(searchNews(searchInp));
    dispatch(searchReviews(searchInp));
    dispatch(searchApps(searchInp));

    if (inputValue.length === 0) {
      dispatch(fetchHomeArticles());
      dispatch(fetchReviews(""));
      dispatch(fetchApps(""));
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = () => {
    switch (activeCategory) {
      case "News":
        dispatch(searchNews(searchInp));
        break;
      case "Reviews":
        dispatch(searchReviews(searchInp));
        break;
      case "Apps":
        dispatch(searchApps(searchInp));
        break;
      default:
        break;
    }
  };
  const getActiveCategoryArticles = () => {
    switch (activeCategory) {
      case "News":
        return searchInp.length === 0 ? NewsArticles : NewsSearchArticles;
      case "Reviews":
        return searchInp.length === 0
          ? ReviewsArticles
          : ReviewsSearchedArticles;
      case "Apps":
        return searchInp.length === 0 ? PhoneApps : PhoneSearchedApps;
      default:
        return [];
    }
  };

  useEffect(() => {
    dispatch(fetchHomeArticles());
  }, [dispatch]);

  useEffect(() => {
    const allArticles = [...NewsArticles, ...ReviewsArticles, ...PhoneApps];
    setRecommendedResults(allArticles);
  }, [NewsArticles, ReviewsArticles, PhoneApps]);

  useEffect(() => {
    handleSearch();
  }, [searchInp, activeCategory]);

  return (
    <div className="search_model">
      <CloseIcon
        className="closeIcon"
        onClick={() => dispatch(hideSearchModal())}
      />
      <div className="searchArea">
        <input
          className="searchInput"
          placeholder="Search for phone or news"
          onChange={(e) => handleChange(e)}
          value={searchInp}
        />
      </div>
      <div className="category_list">
        <h3>Search results for : {searchInp}</h3>
        <ul className="list">
          {["News", "Reviews", "Apps"].map((category) => (
            <li
              key={category}
              className={`list_item ${activeCategory === category && "active"}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      {searchInp.length === 0 && (
        <div className="results_section">
          <h4 style={{ margin: "5px" }}>TOP TRENDING SEARCH</h4>
          <div className="results_section">
            {recommendedResults.map((article) => (
              <SearchResultCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      )}
      {searchInp.length > 0 && (
        <div className="results_section">
          {getActiveCategoryArticles().map((article) => (
            <SearchResultCard article={article} key={article.id} />
          ))}
        </div>
      )}
      {getActiveCategoryArticles().length === 0 && (
        <p>No items in {activeCategory}. Check other categories.</p>
      )}
    </div>
  );
}

export default SearchModel;
