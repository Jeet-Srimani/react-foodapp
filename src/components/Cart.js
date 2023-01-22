import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useData } from "../hooks/use-data";
import "./cart.css";
import CartItem from "./CartItem";

function Cart({ onClose, actions }) {
  const {
    state: { cart },
  } = useData();

  useEffect(()=> {
    document.body.classList.add('overflow-hidden')

    return () => {
        document.body.classList.remove('overflow-hidden');
    }
}, [])

  const fixedCartItems = cart.reduce((acc, cartItem) => {
    let existing = acc.find((item) => item.id === cartItem.id);
    if (existing) {
      existing.quantity++;
    } else {
      acc.push({ ...cartItem, quantity: 1 });
    }
    return acc;
  }, []);

  let totalAmount = 0;
  cart.map((item) => {
    return (totalAmount += parseFloat(item.price));
  });

  const renderedCartItems = fixedCartItems.map((cartItem) => {
    return <CartItem item={cartItem} key={cartItem.id} />;
  });

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="overlay"></div>
      <div className="main-cart">
        <div className="cart-items">
          {renderedCartItems}
          <div className="total-amount">
            <h3>Total Amount</h3>
            <h3>${totalAmount.toFixed(2)}</h3>
          </div>
          {actions}
        </div>
      </div>
    </div>,
    document.querySelector(".cart-container")
  );
}

export default Cart;
