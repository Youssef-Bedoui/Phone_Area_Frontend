import React, { useEffect } from "react";
import "./RightReviews.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../Redux/features/ReviewSlice";
import RightReview from "../../Home/RightReview/RightReview";
import { NavLink } from "react-router-dom";

function RightReviews() {
  const reviews = useSelector((state) => state.Reviews.reviews);
  //select 6 random articles
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledArticles = shuffleArray([...reviews]);
  const randomSixReviews = shuffledArticles.slice(0, 6);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);

  return (
    <div className="rightReviews">
      <h2 className="title">TOP REVIEWS</h2>
      {randomSixReviews.map((article) => (
        <RightReview key={article.id} article={article} />
      ))}
      <NavLink to="/reviews" className="more">
        See more reviews
      </NavLink>
    </div>
  );
}

export default RightReviews;
