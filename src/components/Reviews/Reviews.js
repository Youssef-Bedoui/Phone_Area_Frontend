import React, { useEffect, useState } from "react";
import "./Reviews.scss";
import ReviewArticle from "./ReviewArticle/ReviewArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../Redux/features/ReviewSlice";
import MostVisitedReviews from "../SecondarySections/MostVisitedReviews/MostVisitedReviews";
import AdsComponent from "../AdsComponent/AdsComponent";
import { selectReviewsArticles } from "../Home/selectors";

function Reviews() {
  const dispatch = useDispatch();
  const reviewsArticles = useSelector(selectReviewsArticles);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);

  // Filter reviews based on the search query
  const filteredReviews = reviewsArticles.filter((article) => {
    const phoneModel = article.title ? article.title.toLowerCase() : "";
    return phoneModel.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="reviews">
      <div className="left_section">
        <AdsComponent />
        <MostVisitedReviews />
        <AdsComponent />
      </div>
      <div className="reviews_cont">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search for phone ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredReviews.map((article) => (
          <ReviewArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
