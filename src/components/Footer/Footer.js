import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <div className="footer_img">
        <img
          alt="PhoneArea_logo"
          src="assets/images/logo-png.png"
          loading="lazy"
        />
      </div>
      <div className="right_info">
        <div className="menu_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/phoneDeals">Phone Deals</NavLink>
          <NavLink to="/techNews">Tech News</NavLink>
          <NavLink to="/phoneDeals">Deals</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/termsOfUse">Terms of Use</NavLink>
        </div>
        <div className="copyright_zone">
          <span className="copyright">
            &copy; 2023 - ALL Rights Reserved for PhoneArea Website
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
