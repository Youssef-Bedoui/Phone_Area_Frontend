import React, { useEffect, useState } from "react";
import "./PhoneDeals.scss";
import PhoneModels from "./PhoneModels/PhoneModels";
import DealCard from "./DealCard/DealCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPhoneDealsArticles,
  filterDeals,
} from "../../Redux/features/PhoneDealsSlice";
import RightReviews from "../SecondarySections/RightReviews/RightReviews";
import AdsComponent from "../AdsComponent/AdsComponent";

function PhoneDeals() {
  const dispatch = useDispatch();
  const [selectedStore, setSelectedStore] = useState("all");
  const PhoneDealsArticle = useSelector(
    (state) => state.PhoneDeals.dealsArticles
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchPhoneDealsArticles({}));
  }, [dispatch]);

  const filterByStore = async (store) => {
    if (store === "all") {
      await dispatch(fetchPhoneDealsArticles({}));
    } else {
      await dispatch(fetchPhoneDealsArticles({}));
      dispatch(filterDeals({ category: "store", value: store }));
    }
  };

  const handleStoreChange = (event) => {
    const selectedStore = event.target.value;
    setSelectedStore(selectedStore);
    filterByStore(selectedStore);
  };

  return (
    <div className="PhoneDeals">
      <div className="dealsSection">
        <div className="filter_container">
          <p className="header_parag">
            We offer you the best deals on the market with a set of products in{" "}
            <span className="top">TOP discounts </span> .<br /> We constantly
            follow the prices and update this section to make you up To Date for
            best offers.
            <br />
            (We may earn a commission from those links)
          </p>
          <select
            className="storeFilter"
            value={selectedStore}
            onChange={handleStoreChange}
          >
            <option value="all">All Stores</option>
            <option value="Amazon">AMAZON</option>
            <option value="AliBaba">ALIBABA</option>
          </select>
        </div>
        {PhoneDealsArticle.map((phone) => (
          <DealCard key={phone.id} phone={phone} />
        ))}
      </div>
      <div className="rightSection">
        <PhoneModels />
        <AdsComponent />
        <RightReviews />
        <AdsComponent />
      </div>
    </div>
  );
}

export default PhoneDeals;
