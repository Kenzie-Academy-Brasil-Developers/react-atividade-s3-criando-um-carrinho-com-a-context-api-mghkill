import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const addToCart = (item) => {
    const storage = JSON.parse(localStorage.getItem("@Cart:kenzie")) || [];

    const newItem = [...storage, item];

    localStorage.setItem("@Cart:kenzie", JSON.stringify(newItem));
  };

  const removeFromCart = (item) => {
    const storage = JSON.parse(localStorage.getItem("@Cart:kenzie")) || [];

    const filterItem = storage.filter((element) => element.name !== item.name);

    localStorage.setItem("@Cart:kenzie", JSON.stringify(filterItem));
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
