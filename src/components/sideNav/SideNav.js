import "./index.scss";
import Menu from "../menu";

const SideNav = ({ categories, setCurrentCategory, currentCategory }) => {
  return (
    <div className="SideNav">
      {categories?.map((category, index) => {
        return (
          <Menu
            currentCategory={currentCategory}
            category={category}
            key={index}
            onClick={() => setCurrentCategory(category)}
          />
        );
      })}
    </div>
  );
};

export default SideNav;
