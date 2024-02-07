import React from "react";
import "./PhoneModels.scss";
import { useDispatch } from "react-redux";
import {
  fetchPhoneDealsArticles,
  filterDeals,
} from "../../../Redux/features/PhoneDealsSlice";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
        <li onClick={() => filterModels("")} title="Reset Phone Models"><RestartAltIcon className="reset"/></li>
        <li onClick={() => filterModels("SAMSUNG")}>Samsung</li>
        <li onClick={() => filterModels("Google")}>Google</li>
        <li onClick={() => filterModels("Apple")}>Apple</li>
        <li onClick={() => filterModels("Nokia")}>Nokia</li>
        <li onClick={() => filterModels("Motorola")}>Motorola</li>
        <li onClick={() => filterModels("Sony")}>Sony</li>
        <li onClick={() => filterModels("Asus")}>Asus</li>
      </ul>
    </div>
  );
}

export default PhoneModels;
