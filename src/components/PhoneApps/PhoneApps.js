import React, { useEffect } from "react";
import "./PhoneApps.scss";
import SingleAppCard from "./SingleAppCard/SingleAppCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "../../Redux/features/PhoneAppsSlice";
import RecommendedCard from "./RecommendedCard/RecommendedCard";
import AdsComponent from "../AdsComponent/AdsComponent";

function PhoneApps() {
  const dispatch = useDispatch();
  const phoneApps = useSelector((state) => state.PhoneApps.appArticles);

  useEffect(() => {
    dispatch(fetchApps({}));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo("top", 0);
  });

  return (
    <div className="apps">
      <div className="recommendedApps">
        <AdsComponent />
        <h3 className="recommended_title">RECOMMENDED APPS</h3>
        {phoneApps.slice(0.5).map((article) => (
          <RecommendedCard article={article} key={article.id} />
        ))}
      </div>
      <AdsComponent />
      <div className="rightApps">
        {phoneApps.map((appCard) => (
          <SingleAppCard article={appCard} key={appCard.id} />
        ))}
      </div>
      <AdsComponent />
    </div>
  );
}

export default PhoneApps;
