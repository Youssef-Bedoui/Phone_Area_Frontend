import React from "react";
import "./MainHomeCard.scss";
import { useNavigate } from "react-router-dom";

function MainHomeCard({ article }) {
  const navigate = useNavigate();
  return (
    <div
      className="largeCard"
      onClick={() => {
        navigate(`article/${article.title}`, {
          state: { article: article },
        });
      }}
    >
      <div className="mainImage">
        <img
          src={article.images}
          alt={article.title}
          title={article.title}
        />
      </div>
      <div className="mainTitle">
        <h3>{article.title}</h3>
      </div>
    </div>
  );
}

export default MainHomeCard;
