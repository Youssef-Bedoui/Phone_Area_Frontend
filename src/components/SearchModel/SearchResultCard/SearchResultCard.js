import React from "react";
import "./SearchResultCard.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSearchModal } from "../../../Redux/features/HomeSlice";

function SearchResultCard({ article, title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="resultCard"
      onClick={() => {
        navigate(`/article/${article.title}`, {
          state: { article: article },
        });
        dispatch(hideSearchModal());
      }}
    >
      <div className="result_image">
        <img src={article.images[0]} alt={article.title} />
      </div>
      <h4 className="result_title">{article.title}</h4>
    </div>
  );
}

export default SearchResultCard;
