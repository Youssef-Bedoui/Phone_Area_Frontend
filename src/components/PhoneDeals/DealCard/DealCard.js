import React from "react";
import "./DealCard.scss";
import ScreenshotIcon from "@mui/icons-material/Screenshot";
import MemoryIcon from "@mui/icons-material/Memory";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import CameraIcon from "@mui/icons-material/Camera";
import CameraFrontIcon from "@mui/icons-material/CameraFront";
import PaletteIcon from "@mui/icons-material/Palette";

function DealCard({ phone }) {
  console.log(phone, "phone");
  return (
    <a href={phone.link} target="_blank" className="phoneCard" rel="noreferrer">
      <div className="phone_img">
        <img
          src={phone.image}
          alt={phone.model}
          title={phone.model}
          srcSet={`${phone.image} 480w`}
        />
      </div>
      <div className="phoneDetails">
        <div className="titleCont">
          <h2 className="phoneTitle">{phone.model}</h2>
          {phone.store[1] && (
            <span className="store">
              <img src={phone.store[1]} alt={phone.store[0]} />
            </span>
          )}
        </div>
        <p className="phoneDescription">{phone.description}</p>
        <div className="phone_spec">
          <div className="three_items">
            <div className="spec_item">
              <ScreenshotIcon className="spec_icon" />
              <span className="spec_data">{phone.screen}</span>
            </div>
            <div className="spec_item">
              <MemoryIcon className="spec_icon" />
              <span className="spec_data">{phone.storage}</span>
            </div>
            <div className="spec_item">
              <BatteryChargingFullIcon className="spec_icon" />
              <span className="spec_data">{phone.battery}</span>
            </div>
          </div>
          <div className="three_items">
            <div className="spec_item">
              <CameraIcon className="spec_icon" />
              <span className="spec_data">{phone.rearCamera}</span>
            </div>
            <div className="spec_item">
              <CameraFrontIcon className="spec_icon" />
              <span className="spec_data">{phone.frontCamera}</span>
            </div>
            <div className="spec_item">
              <PaletteIcon className="spec_icon" />
              <span className="spec_data">{phone.colors.join(", ")}</span>
            </div>
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
