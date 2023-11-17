import React, { useEffect } from "react";
import "./MostVisitedReviews.scss";
import MostVisitedArticle from "../../Reviews/MostVisitedArticle/MostVisitedArticle";
import { fetchReviews } from "../../../Redux/features/ReviewSlice";
import { useDispatch, useSelector } from "react-redux";

function MostVisitedReviews() {
  const dispatch = useDispatch();
  const ReviewsArticles = useSelector((state) => state.Reviews.reviews.slice(0.6));

  useEffect(() => {
    dispatch(fetchReviews({}));
  }, [dispatch]);

  return (
    <div className="mostVisited">
      <h3 className="title">MOST VISITED</h3>
      {ReviewsArticles.map((article) => (
        <MostVisitedArticle article={article} key={article.id}/>
      ))}
    </div>
  );
}

export default MostVisitedReviews;
