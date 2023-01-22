import { createContext, useReducer } from "react";

const DataContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add-to-cart":
      //payload recieves an array of objects
      const newCart = [...state.cart, ...action.payload];

      return { ...state, cart: newCart };

    case "remove-from-cart":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
        state.cart.splice(index, 1)
      return { ...state, cart: [...state.cart] };
    case "order-placed":
      return {...state, cart: []}

    default:
      console.log("default");
      break;
  }
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    menu: [
      {
        id: 1,
        name: "Sushi",
        description: "Finest fish and veggies",
        price: "22.99",
      },
      {
        id: 2,
        name: "Schnitzel",
        description: "A german speciality!",
        price: "16.50",
      },
      {
        id: 3,
        name: "Barbecure Burger",
        description: "America, raw meaty",
        price: "12.99",
      },
      {
        id: 4,
        name: "Green Bowl",
        description: "Healthy... and green...",
        price: "16.50",
      },
    ],
    cart: [],
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataProvider };
