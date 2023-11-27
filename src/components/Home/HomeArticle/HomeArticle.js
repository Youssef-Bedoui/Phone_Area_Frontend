import React from "react";
import "./HomeArticle.scss";
import { useNavigate } from "react-router-dom";

function HomeArticle({ article }) {
  const navigate = useNavigate();
  const formattedDate = new Date(article.date).toLocaleDateString("en-US");

  const handleClick = () => {
    navigate(`article/${article.title}`, {
      state: { article: article },
    });
  };

  return (
    <div className="homeArticle" onClick={handleClick}>
      <div className="article_img">
        <img
          src={article.images[0]}
          alt={article.title}
          width="100%" 
          height="auto"
        />
      </div>
      <div className="article_datails">
        <h3 className="art_title">{article.title}</h3>
        <p className="art_description">{article.description[0].paragraph}</p>
        <p className="art_date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default HomeArticle;
