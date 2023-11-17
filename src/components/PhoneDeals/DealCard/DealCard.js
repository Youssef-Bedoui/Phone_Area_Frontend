import React from "react";
import "./DealCard.scss";
import ScreenshotIcon from "@mui/icons-material/Screenshot";
import MemoryIcon from "@mui/icons-material/Memory";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

function DealCard({ phone }) {
  return (
    <a href="phone.link" className="phoneCard">
      <div className="phone_img">
        <img src={phone.image} alt={phone.model} title={phone.model} />
      </div>
      <div className="phoneDetails">
        <div className="titleCont">
          <h2 className="phoneTitle">{phone.model}</h2>
          <span className="store">
            <img
              src={phone.store[1]}
              alt={phone.store[0]}
            />
          </span>
        </div>
        <p className="phoneDescription">{phone.description}</p>
        <div className="phone_spec">
          <div className="spec_item">
            <ScreenshotIcon />
            <span className="spec_data">{phone.screen}</span>
          </div>
          <div className="spec_item">
            <MemoryIcon />
            <span className="spec_data">{phone.storage}</span>
          </div>
          <div className="spec_item">
            <BatteryChargingFullIcon />
            <span className="spec_data">{phone.battery}</span>
          </div>
        </div>
        <div className="price_sec">
          <span className="price">
            {phone.price}
            <span className="discount">OFF {phone.discount}</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default DealCard;
