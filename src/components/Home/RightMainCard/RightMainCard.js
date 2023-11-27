import React from "react";
import "./RightMainCard.scss";
import { useNavigate } from "react-router-dom";

function RightMainCard({ article }) {
  const navigate = useNavigate();

  return (
    <div
      key={article.id}
      className="rightCards"
      onClick={() => {
        navigate(`article/${article.title}`, {
          state: { article: article },
        });
      }}
    >
      <div className="image_cont">
        <img
          src={article.images[0]}
          alt={article.title}
          title={article.title}
          srcSet={`${article.images[0]} 480w`}
        />
      </div>
      <h6>{article.title}</h6>
    </div>
  );
}

export default RightMainCard;
