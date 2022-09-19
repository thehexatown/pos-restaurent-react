import "./header.scss";
import React from "react";
import brand from "../../assets/icons/pwd_brand.svg";
import Search from "../../assets/icons/pwd_search.svg";
import Profile from "../../assets/icons/pwd_profile.svg";
import drop_Drown from "../../assets/icons/drop_Down.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="HeaderLeft">
        <img src={brand} />
        <div className="restaurentDetails">
          <p>
            PWD - Restaurant <br /> <span>13th September, 2022</span>
          </p>
        </div>
      </div>
      <div className="searchCenter">
        <input placeholder="Search" />
        <img src={Search} />
      </div>
      <div className="HeaderRight">
        <img src={Profile} />
        <img src={drop_Drown} />
      </div>
    </div>
  );
};

export default Header;
