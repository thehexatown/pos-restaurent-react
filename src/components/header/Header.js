import "./header.scss";
import React, { useEffect, useState } from "react";
import brand from "../../assets/icons/pwd_brand.svg";
import Search from "../../assets/icons/pwd_search.svg";
import Profile from "../../assets/icons/pwd_profile.svg";
import drop_Drown from "../../assets/icons/drop_Down.svg";
import axios from "axios";
import url from "../../config/url";

const Header = ({ setProducts, getAllProducts }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search.length) {
      searchProducts();
    } else {
      getAllProducts();
    }
  }, [search]);

  const searchProducts = async () => {
    await axios.get(url + `/api/products/search/${search}`).then((res) => {
      setProducts(res.data.products);
    });
  };

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
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
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
