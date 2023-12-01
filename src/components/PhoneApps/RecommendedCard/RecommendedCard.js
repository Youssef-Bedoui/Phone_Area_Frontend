import React from "react";
import "./RecommendedCard.scss";
import { useNavigate } from "react-router-dom";

function RecommendedCard({ article }) {
  const navigate = useNavigate();
  return (
    <div
      className="recommendedCard"
      onClick={() => {
        navigate(`/article/${article.title}/appsArticle${article._id}`);
      }}
    >
      <div className="image_container">
        <img
          src={article.images[0]}
          alt={article.title}
          title={article.title}
          srcSet={`${article.images[0]} 480w`}
        />
        <h3 className="recomm_title">{article.title}</h3>
      </div>
    </div>
  );
}

export default RecommendedCard;
