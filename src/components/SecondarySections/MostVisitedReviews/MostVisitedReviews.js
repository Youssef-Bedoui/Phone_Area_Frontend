import React, { useEffect } from "react";
import "./MostVisitedReviews.scss";
import MostVisitedArticle from "../../Reviews/MostVisitedArticle/MostVisitedArticle";
import { fetchReviews } from "../../../Redux/features/ReviewSlice";
import { useDispatch, useSelector } from "react-redux";

function MostVisitedReviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.Reviews.reviews);

  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);

  const mostVisitedReviews = reviews.slice(0, Math.ceil(reviews.length * 0.6));

  return (
    <div className="mostVisited">
      <h3 className="title">MOST VISITED</h3>
      {mostVisitedReviews.map((article) => (
        <MostVisitedArticle article={article} key={article.id} />
      ))}
    </div>
  );
}

export default MostVisitedReviews;
