import "./index.scss";
import SideBarImage from "../../assets/icons/Burger.svg";
import { useEffect } from "react";

const Menu = ({ category, onClick, currentCategory }) => {
  return (
    <div
      className={
        currentCategory.id == category.id ? "Menu backgoundColor" : "Menu"
      }
      onClick={onClick}
    >
      <img src={SideBarImage} />
      <p>{category.name}</p>
    </div>
  );
};

export default Menu;
