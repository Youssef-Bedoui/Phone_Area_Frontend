import React from "react";
import "./PhoneModels.scss";
import { useDispatch } from "react-redux";
import {
  fetchPhoneDealsArticles,
  filterDeals,
} from "../../../Redux/features/PhoneDealsSlice";

function PhoneModels() {
  const dispatch = useDispatch();

  const filterModels = async (model) => {
    await dispatch(fetchPhoneDealsArticles({}));
    dispatch(filterDeals({ category: "model", value: model }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="models">
      <h4 className="models_title">PHONE MODELS DEALS</h4>
      <ul>
        <li onClick={() => filterModels("")}>All Models</li>
        <li onClick={() => filterModels("Motorola")}>Motorola</li>
        <li onClick={() => filterModels("SAMSUNG")}>Samsung</li>
        <li onClick={() => filterModels("Google")}>Google Pixel</li>
        <li onClick={() => filterModels("Nokia")}>Nokia</li>
        
      </ul>
    </div>
  );
}

export default PhoneModels;
