import React, { useEffect } from "react";
import "./RightReviews.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../Redux/features/ReviewSlice";
import RightReview from "../../Home/RightReview/RightReview";
import { NavLink } from "react-router-dom";

function RightReviews() {
  const ReviewsArticles = useSelector((state) => state.Reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);
  
  return (
    <div className="rightReviews">
      <h2 className="title">TOP REVIEWS</h2>
      {ReviewsArticles.map((article) => (
        <RightReview key={article.id} article={article} />
      ))}
      <NavLink to="/reviews" className="more">
        See more reviews
      </NavLink>
    </div>
  );
}

export default RightReviews;
