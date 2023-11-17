import React from "react";
import "./SingleMoreArticle.scss";
import { useNavigate } from "react-router-dom";

function SingleMoreArticle({ article }) {
  const navigate = useNavigate();
  return (
    <div
      className="more_article"
      onClick={() => {
        navigate(`article/${article.title}`, { state: { article: article } });
      }}
    >
      <div className="image">
        <img alt={article.title} src={article.images[0]} />
      </div>
      <div className="more_details">
        <h5 className="more_title">{article.title}</h5>
      </div>
    </div>
  );
}

export default SingleMoreArticle;
