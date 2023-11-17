import React from "react";
import "./RightReview.scss";
import { useNavigate } from "react-router-dom";

function RightReview({ article }) {
  const navigate = useNavigate();
  const formattedDate = new Date(article.date).toLocaleDateString("en-US");

  return (
    <div
      className="rightReview"
      onClick={() => {
        navigate(`/article/${article.title}`, {
          state: { article: article },
        });
      }}
    >
      <div className="art_img">
        <img
          src={article.images[0]}
          alt={article.title}
          title={article.title}
        />
      </div>
      <div className="art_details">
        <h3 className="review_title">{article.title}</h3>
        <p className="review_date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default RightReview;
