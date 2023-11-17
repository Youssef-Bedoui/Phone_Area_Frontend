import React from "react";
import "./TopSearchedPhones.scss";
import TopSearchedPhone from "../../Home/TopSearchedPhone/TopSearchedPhone";

function TopSearchedPhones() {
  return (
    <div className="TopSearchedPhones">
      <h2 className="title">
        <img
          className="fire_icon"
          src="assets/icons/fire.png"
          alt="fire_icon"
        />
        TOP SEARCHED PHONES
      </h2>
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
      <TopSearchedPhone />
    </div>
  );
}

export default TopSearchedPhones;
