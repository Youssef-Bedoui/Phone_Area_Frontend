import React from "react";
import "./SingleAppCard.scss";
import { useNavigate } from "react-router-dom";

function SingleAppCard({ article }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/article/${article.title}/appsArticle/${article._id}`);
      }}
      className="singleCard"
    >
      <div className="image_section">
        <img src={article.images[0]} alt={article.title}/>
      </div>
      <div className="cardDetails">
        <h3 className="card_title">{article.title}</h3>
      </div>
    </div>
  );
}

export default SingleAppCard;
