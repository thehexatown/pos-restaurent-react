import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartImage from "../../assets/icons/cart.svg";
import subtractImage from "../../assets/icons/subtract.svg";
import addImage from "../../assets/icons/plus+.svg";
import crossImage from "../../assets/icons/cross.svg";
import { add } from "../../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ modalVisibility, product }) => {
  const notify = () => toast("Added");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("exxx", product.extras);
  }, []);

  const [size, setSize] = useState(
    product?.attributes ? product?.attributes.mediumPrice : product.mediumPrice
  );
  const [extra, setExtra] = useState(0);
  const [sizeChecked, setSizeChecked] = useState("medium");

  const [quantity, setQuantity] = useState(1);
  const increament = () => {
    setQuantity(quantity + 1);
  };
  const decreament = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onSizeChange = (value) => {
    setSizeChecked(value);
    if (value == "medium") {
      setSize(
        product?.attributes
          ? product?.attributes.mediumPrice
          : product.mediumPrice
      );
    }
    if (value == "small") {
      setSize(
        product?.attributes
          ? product?.attributes.smallPrice
          : product.smallPrice
      );
    }
    if (value == "large") {
      setSize(
        product?.attributes
          ? product?.attributes.largePrice
          : product.largePrice
      );
    }
  };
  const onExtraChange = (value) => {
    setExtra(value);
  };
  const addToCart = () => {
    let cartItem = {
      id: product?.id,
      title: product?.attributes ? product?.attributes.title : product.title,
      quantity: quantity,
      price: size,
      extraPrice: extra,
    };

    dispatch(add(cartItem));
    notify();
    setQuantity(1);

    modalVisibility(false);
  };

  return (
    <div className="cart">
      <div className="cartClose">
        <img src={crossImage} onClick={() => modalVisibility(false)} />
      </div>
      <div className="cartHeader">
        <p>{product?.attributes ? product?.attributes.title : product.title}</p>
        <img src={cartImage} />
      </div>

      <div className="size">
        <p>Choose your meal size</p>
        <div className="sizeRadio">
          <div className="radioDiv">
            <input
              type="radio"
              name="size"
              id="small"
              checked={sizeChecked == "small" ? "checked" : ""}
              onChange={() => onSizeChange("small")}
            />
            <p>
              Small 7”($
              {product?.attributes
                ? product?.attributes.smallPrice
                : product.smallPrice}
              )
            </p>
          </div>
          <div className="radioDiv">
            <input
              type="radio"
              name="size"
              checked={sizeChecked == "medium" ? "checked" : ""}
              onChange={() => onSizeChange("medium")}
              id="medium"
            />
            <p>
              Medium 9”($
              {product?.attributes
                ? product?.attributes.mediumPrice
                : product.mediumPrice}
              )
            </p>
          </div>
          <div className="radioDiv">
            <input
              type="radio"
              name="size"
              id="large"
              checked={sizeChecked == "large" ? "checked" : ""}
              onChange={() => onSizeChange("large")}
            />
            <p>
              Large 11” ($
              {product?.attributes
                ? product?.attributes.largePrice
                : product.largePrice}
              )
            </p>
          </div>
        </div>
      </div>
      <div className="size">
        <p>Add-ons</p>
        <div className="sizeRadio">
          <div className="radioDiv">
            <input type="radio" name="addOn" />
            <p>No add-ons</p>
          </div>
          {product?.extras?.map((item) => {
            return (
              <div className="radioDiv">
                <input
                  type="radio"
                  name="addOn"
                  id="item?.attributes?.name"
                  onChange={() => onExtraChange(item?.price)}
                />
                <p>{item?.name + `($${item?.price})`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="quantity">
        <img src={subtractImage} onClick={decreament} />
        <p>{quantity}</p>
        <img src={addImage} onClick={increament} />
      </div>

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Cart;
