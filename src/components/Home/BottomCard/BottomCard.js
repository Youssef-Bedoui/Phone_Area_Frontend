import React from "react";
import "./BottomCard.scss";
import { useNavigate } from "react-router-dom";

function BottomCards({ article }) {
  const navigate = useNavigate();

  return (
    <div
      key={article.id}
      className="bottomCard"
      onClick={() => {
        navigate(`article/${article.title}`, { state: { article: article } });
      }}
    >
      <img
        src={article.images[0]}
        alt={article.title}
        title={article.title}
        loading="lazy"
        srcSet={`${article.images[0]} 480w`}
      />
      <h3>{article.title}</h3>
    </div>
  );
}

export default BottomCards;
