import CheckoutItem from "../checkoutProduct";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../features/cartSlice";
import axios from "axios";
import url from "../../config/url";
import "./index.scss";
import { clearCart } from "../../features/cartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Order = () => {
  const token = useSelector((state) => state.login.token);
  const notify = () => toast("Order Confirmed");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.auth.cartItems);
  const Total = useSelector((state) => state.auth.cartTotalAmount);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const conFirmOrder = async () => {
    await axios
      .post(
        url + "/api/orders",
        {
          data: {
            cartItems: cartItems,
            Total: Total,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        dispatch(clearCart());
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Order">
      <div className="Heading">
        <p>Current Order</p>
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className="cartItems">
            {cartItems.map((Item, index) => {
              return <CheckoutItem Item={Item} key={index} />;
            })}
          </div>

          <div className="subTotal">
            <p>Subtotal</p>
            <h5>$20.99</h5>
          </div>
          <div className="Salestax">
            <p>Sales tax</p>
            <h5>$4.99</h5>
          </div>
          <div className="dottedBorder"></div>
          <div className="Total">
            <p>Total</p>
            <h5>${Total}</h5>
          </div>

          <button onClick={conFirmOrder}>Confirm Order</button>
        </>
      ) : (
        <div className="cartEmpty">cart is Empty Start Shopping</div>
      )}
    </div>
  );
};

export default Order;
