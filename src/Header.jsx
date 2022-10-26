import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import LOGO from './images/Logo.jpg';
// import LOGO from './images/LOGOtransparent.jpg';
import MenuIcon from "@mui/icons-material/Menu";
import LOGO from "./images/newlogo.png";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [dropDown, setDropdown] = useState(false);
  const [openSidemenu, setOpensidemenu] = useState(false);
  const [openServices, setOpenservices] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img className="header__img" src={LOGO} />
          </NavLink>

          {!openSidemenu ? (
            <MenuIcon
              className="header__hamburgerIcon"
              onClick={() => {
                openSidemenu ? setOpensidemenu(false) : setOpensidemenu(true);
              }}
            />
          ) : (
            <CloseIcon
              className="header__hamburgerIcon"
              onClick={() => {
                openSidemenu ? setOpensidemenu(false) : setOpensidemenu(true);
              }}
            />
          )}
        </div>

        <div className="header__nav">
          <NavLink
            to={"/"}
            className="nav__links "
            activeClassName="active_link"
          >
            <p className="header__nav__heading "> Home </p>
          </NavLink>

          <NavLink
            to={"/about"}
            className="nav__links "
            activeClassName="active_link"
          >
            <p className="header__nav__heading "> AboutUs </p>
          </NavLink>

          <NavLink
            to={""}
            className="nav__links "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            activeClassName="active_link"
          >
            <p className="header__nav__heading ">Services</p>
            <ul className={dropDown ? "dropDown__block" : "dropDown__none"}>
              <NavLink
                to={"/hiringservices"}
                className="dropdown__links"
                activeClassName="active_link"
              >
                <li className="dropDown__list ">Hiring Services</li>
              </NavLink>
              <NavLink
                to={"/marketplaceservices"}
                className="dropdown__links "
                activeClassName="active_link"
              >
                <li className="dropDown__list">Marketplace Services</li>{" "}
              </NavLink>
            </ul>
          </NavLink>

          <NavLink
            to={"/contact"}
            className="nav__links "
            activeClassName="active_link"
          >
            <p className="header__nav__heading">ContactUs</p>
          </NavLink>
        </div>
      </div>

      {openSidemenu
        ? [
            <div className="sidebarMenu">
              <div className="sidebarMenu__nav">
                <NavLink to={"/"} className="sidebarMenu__nav__links ">
                  <p className="sidebarMenu__nav__heading "  onClick={()=> setOpensidemenu(false)}> Home </p>
                </NavLink>

                <NavLink to={"/about"} className="sidebarMenu__nav__links ">
                  <p className="sidebarMenu__nav__heading "  onClick={()=> setOpensidemenu(false)}> AboutUs </p>
                </NavLink>

                <NavLink
                  to={"/hiringservices"}
                  className="sidebarMenu__nav__links "
                >
                  <p className="sidebarMenu__nav__heading "  onClick={()=> setOpensidemenu(false)}>
                    {" "}
                    Hiring Services{" "}
                  </p>
                </NavLink>

                <NavLink
                  to={"/marketplaceservices"}
                  className="sidebarMenu__nav__links "
                >
                  <p className="sidebarMenu__nav__heading "  onClick={()=> setOpensidemenu(false)}>
                    {" "}
                    Marketplace Services{" "}
                  </p>
                </NavLink>

                <NavLink to={"/contact"} className="sidebarMenu__nav__links ">
                  <p className="sidebarMenu__nav__heading"  onClick={()=> setOpensidemenu(false)}>ContactUs</p>
                </NavLink>
              </div>
            </div>,
          ]
        : null}
    </div>
  );
}

export default Header;
