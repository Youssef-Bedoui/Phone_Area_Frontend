import React, { useEffect, useState } from "react";
import "./TechNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechNews } from "../../Redux/features/TechNewsSlice";
import AdsComponent from "../AdsComponent/AdsComponent";
import { selectTechNewssArticles } from "../Home/selectors";
import MostVisitedNews from "../SecondarySections/MostVisitedNews/MostVisitedNews";
import TechNewsArticle from "./TechNewsArticle/TechNewsArticle";

function TechNews() {
  const dispatch = useDispatch();
  const reviewsArticles = useSelector(selectTechNewssArticles);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    dispatch(fetchTechNews({}));
  }, [dispatch]);

  // Filter reviews based on the search query
  const filteredTechNews = reviewsArticles.filter((article) => {
    const phoneModel = article.title ? article.title.toLowerCase() : "";
    return phoneModel.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="reviews">
      <div className="left_section">
        <AdsComponent />
        <MostVisitedNews />
        <AdsComponent />
      </div>
      <div className="reviews_cont">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredTechNews.map((article) => (
          <TechNewsArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default TechNews;
