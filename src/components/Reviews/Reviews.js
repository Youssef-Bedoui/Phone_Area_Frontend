import React, { useEffect } from "react";
import "./Reviews.scss";
import ReviewArticle from "./ReviewArticle/ReviewArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../Redux/features/ReviewSlice";
import MostVisitedReviews from "../SecondarySections/MostVisitedReviews/MostVisitedReviews";
import AdsComponent from "../AdsComponent/AdsComponent";
import { selectReviewsArticles } from "../Home/selectors";

function Reviews() {
  const dispatch = useDispatch();
  const ReviewsArticles = useSelector(selectReviewsArticles);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);

  return (
    <div className="reviews">
      <div className="left_section">
        <AdsComponent />
        <MostVisitedReviews />
        <AdsComponent />
      </div>
      <div className="reviews_cont">
        {ReviewsArticles.map((article) => (
          <ReviewArticle article={article} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
