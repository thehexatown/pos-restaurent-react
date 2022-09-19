import "./index.scss";

import NavItem from "../navItem";
import Product from "../product";
import { useEffect } from "react";

const Category = ({
  openModal,
  setCurrentProduct,
  categories,
  products,
  setCurrentCategory,
  currentCategory,
}) => {
  return (
    <div className="Category">
      <div className="categoryNav">
        <NavItem onClick={() => setCurrentCategory(0)} />
        {categories?.map((category, index) => {
          return (
            <NavItem
              currentCategory={currentCategory}
              category={category}
              key={index}
              onClick={() => setCurrentCategory(category)}
            />
          );
        })}
      </div>

      <p className="CategoryName">All Categories</p>
      <div className="CategroyBody">
        {products.length > 0 ? (
          products?.map((product, index) => {
            return (
              <Product
                setCurrentProduct={setCurrentProduct}
                openModal={openModal}
                product={product}
                key={index}
              />
            );
          })
        ) : (
          <>
            <div>No products</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
