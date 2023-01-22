import "./cart-item.css";
import {useData} from '../hooks/use-data'

function CartItem({ item }) {
  const { dispatch } = useData()

  const removeItemHandler = () => {
    dispatch({ type: "remove-from-cart", payload: item });
  };

  const addItemHandler = () => {
    //sends an array of the item object
    dispatch({
      type: "add-to-cart",
      payload: [
        {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
        },
      ],
    });
  };
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <div className="price-and-quantity">
          <h5 className="item-price">${item.price}</h5>
          <h5 className="quantity">x{item.quantity}</h5>
        </div>
      </div>
      <div className="action-bottons-div">
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
