import { useState } from "react";
import {useData} from '../hooks/use-data'
import "./menuitem.css";

function MenuItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useData();

  const quantityInputChange = (event) => {
    setQuantity(event.target.value);
  };

  const addClickHandler = () => {
    const arrayPayload = [...Array(parseInt(quantity))].fill({ ...item });
    dispatch({ type: "add-to-cart", payload: arrayPayload });
    setQuantity(1);
  };
  return (
    <div className="menu-item">
      <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <h4 className="item-price">${item.price}</h4>
      </div>
      <div className="menu-right-side">
        <div className="amount-add-btn amountandadd">
          <h5>Amount</h5>
          <input
            type="number"
            onChange={quantityInputChange}
            value={quantity}
          />
        </div>

        <button onClick={addClickHandler} className="add-btn amountandadd">+Add</button>
      </div>
    </div>
  );
}
export default MenuItem;
