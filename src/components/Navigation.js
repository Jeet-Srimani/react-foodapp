import { useState } from "react";
import { useData } from "../hooks/use-data";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import "./navigation.css";

function Navigation() {
  const [showCart, setShowCart] = useState(false);

  const data = useData()

  const totalCartItems = data.state.cart.length;

  let totalAmount = 0;
  data.state.cart.map((item) => {
    return (totalAmount += parseFloat(item.price));
  });

  const openCartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };

  const actions = (
    <div className="cart-actions">
      <button onClick={cartCloseHandler} className="btn-close">
        Close
      </button>
      <button
        className="btn-order"
        onClick={() => {
          console.log("Order Placed");
          data.dispatch({ type: "order-placed" });
        }}
      >
        Order
      </button>
    </div>
  );

  const cart = <Cart onClose={cartCloseHandler} actions={actions}></Cart>;

  return (
    <div className="nav">
      <h1>HeartyKitchen</h1>
      <div>
        <button onClick={openCartHandler} className="cart-btn">
          <FaShoppingCart className="icon" />
          <div>
            <h3>Your Cart</h3>
            <p className="cart-amount">{totalCartItems}</p>
          </div>
        </button>
        {showCart && cart}
      </div>
    </div>
  );
}

export default Navigation;
