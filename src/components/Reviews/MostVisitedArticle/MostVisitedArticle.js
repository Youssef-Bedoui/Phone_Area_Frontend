import React from "react";
import "./MostVisitedArticle.scss";
import { useNavigate } from "react-router-dom";

function MostVisitedArticle({ article }) {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/article/${article.title}`, {
      state: { article: article },
    });
  };
  
  return (
    <div className="MostVisitedArticle" onClick={() => navigateToDetails()}>
      <div className="art_img">
        <img
          src={article.images[0]}
          alt={article.title}
          title={article.title}
        />
      </div>
      <div className="art_details">
        <h4 className="art_title">{article.title}</h4>
      </div>
    </div>
  );
}

export default MostVisitedArticle;
