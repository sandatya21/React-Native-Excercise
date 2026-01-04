// actions/cartActions.js

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

// ✅ ACTION UNTUK MENGURANGI JUMLAH PRODUK
export const decreaseQty = (product) => ({
  type: "DECREASE_QTY",
  payload: product,
});
