// Home.js
import React, { useEffect } from "react";
import "./Home.scss";
import MainHomeCard from "./MainHomeCard/MainHomeCard";
import RightMainCard from "./RightMainCard/RightMainCard";
import BottomCards from "./BottomCard/BottomCard";
import HomeArticle from "./HomeArticle/HomeArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopBigArticle } from "../../Redux/features/HomeBigSlice";
import { fetchRightArticles } from "../../Redux/features/HomeRightSlice";
import { fetchHomeBottomArticles } from "../../Redux/features/HomeBottomSlice";
import {
  fetchHomeArticles,
  hideSearchModal,
} from "../../Redux/features/HomeSlice";
import RightReviews from "../SecondarySections/RightReviews/RightReviews";
import TopSearchedPhones from "../SecondarySections/TopSearchedPhones/TopSearchedPhones";
import AdsComponent from "../AdsComponent/AdsComponent";
import {
  selectMainArticle,
  selectRightArticles,
  selectBottomArticles,
  selectHomeArticles,
} from "./selectors";

function Home() {
  const dispatch = useDispatch();
  const mainArticle = useSelector(selectMainArticle);
  const RightArticles = useSelector(selectRightArticles);
  const BottomArticles = useSelector(selectBottomArticles);
  const HomeArticles = useSelector(selectHomeArticles);

  useEffect(() => {
    dispatch(fetchTopBigArticle());
    dispatch(fetchRightArticles());
    dispatch(fetchHomeBottomArticles());
    dispatch(fetchHomeArticles());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(hideSearchModal());
  }, []);

  return (
    <div id="Home">
      {mainArticle && <MainHomeCard article={mainArticle} />}
      <div className="rightMainCards">
        {RightArticles.map((article) => (
          <RightMainCard key={article.id} article={article} />
        ))}
      </div>
      <div className="BottomCards">
        {BottomArticles.map((article) => (
          <BottomCards key={article.id} article={article} />
        ))}
      </div>
      <div className="homeArticles">
        <div className="articleContainer">
          {HomeArticles.map((article) => (
            <HomeArticle key={article.id} article={article} />
          ))}
        </div>
        <div className="rightSection">
          <AdsComponent />
          <RightReviews />
          <TopSearchedPhones />
        </div>
      </div>
    </div>
  );
}

export default Home;
