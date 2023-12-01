import React from "react";
import "./SearchResultCard.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSearchModal } from "../../../Redux/features/HomeSlice";

function SearchResultCard({ article }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/SearchedArticles/${article.title}/`, {
      state: { article: article },
    });
    dispatch(hideSearchModal());
  };

  return (
    <div className="resultCard" onClick={handleCardClick}>
      <div className="result_image">
        <img
          src={article.images}
          alt={article.title}
          loading="lazy"
          srcSet={`${article.images} 480w`}
        />
      </div>
      <h4 className="result_title">{article.title}</h4>
    </div>
  );
}

export default SearchResultCard;
