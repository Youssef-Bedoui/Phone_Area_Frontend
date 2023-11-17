import React from "react";
import "./ReviewArticle.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

function ReviewArticle({ article }) {
  const navigate = useNavigate();
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="reviewArticle"
      onClick={() => {
        navigate(`/article/${article.title}`, {
          state: { article: article },
        });
      }}
    >
      <div className="review_img">
        <img src={article.images[0]} alt={article.title} />
      </div>
      <div className="review_details">
        <h3 className="review_title">{article.title}</h3>
        <p className="review_description">
          {article.description[0].paragraph}
        </p>
        <span className="review_date">
          <AccessTimeIcon className="clock_icon" />
          {formattedDate}
        </span>
      </div>
    </div>
  );
}

export default ReviewArticle;
