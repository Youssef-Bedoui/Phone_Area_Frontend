import React from "react";
import "./SingleAppCard.scss";
import { useNavigate } from "react-router-dom";

function SingleAppCard({ article }) {
  const navigate = useNavigate();
  const formattedDate = new Date(article.date).toLocaleDateString("en-US");

  return (
    <div
      onClick={() => {
        navigate(`/article/${article.title}`, {
          state: { article: article },
        });
      }}
      className="singleCard"
    >
      <div className="image_section">
        <img src={article.images[0]} alt={article.title} />
      </div>
      <div className="cardDetails">
        <h3 className="card_title">{article.title}</h3>
        <p className="card_date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default SingleAppCard;
