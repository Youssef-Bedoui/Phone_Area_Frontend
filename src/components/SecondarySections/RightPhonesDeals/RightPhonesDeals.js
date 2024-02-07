import React, { Fragment, useEffect } from "react";
import "./RightPhonesDeals.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoneDealsArticles } from "../../../Redux/features/PhoneDealsSlice";
import DiscountIcon from "@mui/icons-material/Discount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function RightPhonesDeals() {
  const dispatch = useDispatch();
  const phoneDeals = useSelector((state) => state.PhoneDeals.dealsArticles);

  const getRandomPhones = () => {
    const shuffledPhones = [...phoneDeals].sort(() => 0.5 - Math.random());
    return shuffledPhones.slice(0, 6);
  };

  useEffect(() => {
    dispatch(fetchPhoneDealsArticles());
  }, [dispatch]);

  const randomPhones = getRandomPhones();

  return (
    <Fragment>
      {randomPhones.map((phone, index) => (
        <div className="RightPhoneDeals" key={index}>
          <span className="discount">
            <DiscountIcon className="discountIcon" />
            <h4 className="discPerc">{phone.discount}</h4>
          </span>
          <div className="phoneImage">
            <img src={phone.image} alt={phone.model} title={phone.model} />
          </div>

          <h3 className="phoneDescription">{phone.description}</h3>
          <h3 className="buy">
            BUY NOW <ShoppingCartIcon />
          </h3>
        </div>
      ))}
      <h4 className="more_deals">
        <LocalOfferIcon className="deal_icon"/>{" "}
        More Deals...
      </h4>
    </Fragment>
  );
}

export default RightPhonesDeals;
