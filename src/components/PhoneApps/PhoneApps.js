import React, { useEffect } from "react";
import "./PhoneApps.scss";
import SingleAppCard from "./SingleAppCard/SingleAppCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchApps } from "../../Redux/features/PhoneAppsSlice";
import RecommendedCard from "./RecommendedCard/RecommendedCard";
import AdsComponent from "../AdsComponent/AdsComponent";

function PhoneApps() {
  const dispatch = useDispatch();
  const PhoneApps = useSelector((state) => state.PhoneApps.appArticles);

  useEffect(() => {
    dispatch(fetchApps({}));
  }, [dispatch]);

  return (
    <div className="apps">
      <div className="recommendedApps">
        <AdsComponent />

        <h3 className="recommended_title">RECOMMENDED APPS</h3>
        {PhoneApps.slice(0.5).map((article) => (
          <RecommendedCard article={article} key={article.id} />
        ))}
      </div>
      <AdsComponent />

      <div className="rightApps">
        {PhoneApps.map((appCard) => (
          <SingleAppCard article={appCard} key={appCard.id} />
        ))}
      </div>
      <AdsComponent />
    </div>
  );
}

export default PhoneApps;
