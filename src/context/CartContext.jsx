import React, { createContext, useEffect, useState } from "react";

import ItemCount from "../components/ItemCount";
import ItemDetail from "../components/ItemDetail";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [items, setItems] = useState([]);
  const clear = () => {
    setItems([]);
  };

  const isInCart = (id) => {
    const miItem = items.findIndex((item) => {
      return item.id === id;
    });

    return miItem !== -1;
  };

  const removeItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const totalCarrito = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };

  useEffect(() => {
    setTotalCart(totalCarrito());
  }, [items]);

  const cartItems = () => {
    return items.length;
  };

  const addItem = (producto) => {
    if (isInCart(producto.id)) {
      setItems((prevItems) => {
        return prevItems.map((item) => {
          return item.id === producto.id
            ? { ...item, qty: item.qty + producto.qty }
            : item;
        });
      });
    } else {
      setItems([...items, producto]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        addItem,
        clear,
        isInCart,
        removeItem,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
