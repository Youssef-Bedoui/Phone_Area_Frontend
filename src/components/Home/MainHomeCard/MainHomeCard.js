import React from "react";
import "./MainHomeCard.scss";
import { useNavigate } from "react-router-dom";

function MainHomeCard({ article }) {
  const navigate = useNavigate();
  return (
    <div
      className="largeCard"
      onClick={() => {
        navigate(`/article/${article.title}/mainArticle/${article._id}`);
      }}
    >
      <div className="mainImage">
        <img
          src={article.images}
          alt={article.title}
          title={article.title}
          loading="lazy"
          srcSet={`${article.images} 480w`}
        />
      </div>
      <div className="mainTitle">
        <h2>{article.title}</h2>
      </div>
    </div>
  );
}

export default MainHomeCard;
