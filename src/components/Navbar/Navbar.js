import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { showSearchModal } from "../../Redux/features/HomeSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav id="navbar">
      <NavLink className="menuNavNavLinkItem logo" to="/">
        <img
          className="logo_img"
          src="assets/images/logo.png"
          alt="PhoneArea_logo"
          loading="lazy"
          srcSet="assets/images/logo.png 480w, assets/images/logo.png 800w, assets/images/logo.png 1200w"
        />
      </NavLink>
      <div className="menu">
        <NavLink activeClassName="active" className="menuLinkItem" to="/">
          HOME
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/reviews"
        >
          REVIEWS
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/phoneDeals"
        >
          DEALS
        </NavLink>
        <NavLink activeClassName="active" className="menuLinkItem" to="/apps">
          APPS
        </NavLink>
        <NavLink
          activeClassName="active"
          className="menuLinkItem"
          to="/contact"
        >
          CONTACT
        </NavLink>

        <NavLink className="search" onClick={() => dispatch(showSearchModal())}>
          <SearchIcon className="searchIcon" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
