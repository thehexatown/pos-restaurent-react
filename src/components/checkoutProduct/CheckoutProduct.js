import "./index.scss";
import checkoutProductImage from "../../assets/icons/checkout_product.svg";
import checkoutAdd from "../../assets/icons/checkout_add.svg";
import checkoutSubtract from "../../assets/icons/checkout-.svg";
import { decreaseCart, add } from "../../features/cartSlice";

import { useDispatch } from "react-redux";

const CheckoutItem = ({ Item }) => {
  const dispatch = useDispatch();
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="CheckoutItemContainer">
      <div className="Item">
        <div className="CheckoutItemLeft">
          <img src={checkoutProductImage} />
          <p>
            {Item.title}
            <br />
            <span>${Item.price}</span>
          </p>
        </div>
        <div className="CheckoutItemRight">
          <img
            src={checkoutSubtract}
            onClick={() => handleDecreaseCart(Item)}
          />
          <p>{Item.quantity}</p>
          <img src={checkoutAdd} onClick={() => handleAddToCart(Item)} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
