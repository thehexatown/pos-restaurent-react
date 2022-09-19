import { useEffect } from "react";
import "./index.scss";

const NavItem = ({ category, onClick, currentCategory }) => {
  return (
    <div
      className={
        category && category?.id == currentCategory?.id
          ? "NavItem backgroundColor"
          : "NavItem"
      }
      onClick={onClick}
    >
      <p>{category ? category.attributes?.name : "All"}</p>
    </div>
  );
};

export default NavItem;
