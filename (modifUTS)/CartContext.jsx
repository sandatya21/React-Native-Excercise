import React from "react";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([]); // each item: {id, nama, harga, qty, gambar}

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [{ ...product, qty: 1 }, ...prev];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCart = () => setItems([]);

  return <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
