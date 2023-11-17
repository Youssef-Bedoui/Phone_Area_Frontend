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
        <li onClick={() => filterModels("Motorola")}>Motorola</li>
        <li onClick={() => filterModels("Samsung")}>Samsung</li>
        <li onClick={() => filterModels("Xiaomi")}>Xiaomi</li>
        <li>Iphone</li>
        <li>Apple</li>
        <li>Nokia</li>
        <li>Poco</li>
        <li>Vivo</li>
        <li>Huawei</li>
        <li>Infinix</li>
        <li>Lenovo</li>
        <li>Asus</li>
        <li>Google</li>
        <li>Alcatel</li>
      </ul>
    </div>
  );
}

export default PhoneModels;
