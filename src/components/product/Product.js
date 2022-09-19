import "./index.scss";
import ProductImage from "../../assets/icons/product.svg";
import checkout from "../../assets/icons/add_to_checkout.svg";

import { useEffect, useState } from "react";

const Product = ({ product, openModal, setCurrentProduct }) => {
  const openCartModal = () => {
    openModal(true);
    setCurrentProduct(product);
  };

  return (
    <>
      <div className="Product">
        <img src={ProductImage} />
        <div className="productDetails">
          <p>
            {product?.attributes ? product?.attributes.title : product.title}
            <br />
            <span>
              $
              {product?.attributes
                ? product?.attributes.mediumPrice
                : product.mediumPrice}
            </span>
          </p>

          <img src={checkout} onClick={openCartModal} />
        </div>
      </div>
    </>
  );
};

export default Product;
