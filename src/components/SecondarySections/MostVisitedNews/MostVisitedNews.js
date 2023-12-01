import React, { useEffect } from "react";
import "./MostVisitedNews.scss";
import MostVisitedArticle from "../../TechNews/MostVisitedArticle/MostVisitedArticle";
import { fetchTechNews } from "../../../Redux/features/TechNewsSlice";
import { useDispatch, useSelector } from "react-redux";

function MostVisitedNews() {
  const dispatch = useDispatch();
  const techNews = useSelector((state) => state.TechNews.techNews);

  useEffect(() => {
    dispatch(fetchTechNews({}));
  }, [dispatch]);

  const mostVisitedNews = techNews.slice(0, Math.ceil(techNews.length * 0.6));

  return (
    <div className="mostVisited">
      <h3 className="title">MOST VISITED</h3>
      {mostVisitedNews.map((article) => (
        <MostVisitedArticle article={article} key={article.id} />
      ))}
    </div>
  );
}

export default MostVisitedNews;
