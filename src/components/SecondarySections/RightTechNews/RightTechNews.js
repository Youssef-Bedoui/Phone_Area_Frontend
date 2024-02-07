import React, { useEffect } from "react";
import "./RightTechNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechNews } from "../../../Redux/features/TechNewsSlice";
import RightReview from "../../Home/RightTechNews/RightTechNews";
import { NavLink } from "react-router-dom";

function RightTechNews() {
  const techNews = useSelector((state) => state.TechNews.techNews);
  //select 6 random articles
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledArticles = shuffleArray([...techNews]);
  const randomSixTechNews = shuffledArticles.slice(0, 6);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechNews({}));
  }, [dispatch]);

  return (
    <div className="rightNews">
      <h2 className="title">Tech News</h2>
      {randomSixTechNews.map((article) => (
        <RightReview key={article.id} article={article} />
      ))}
      <NavLink to="/techNews" className="more">
        See more News
      </NavLink>
    </div>
  );
}

export default RightTechNews;
