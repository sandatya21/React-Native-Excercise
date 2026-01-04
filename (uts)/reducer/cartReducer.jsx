// reducers/cartReducer.js

// initial state untuk cart: array item {nama, harga, gambar, qty}
const initialState = {
  items: [],
};

// reducer menerima (state, action) dan mengembalikan state baru
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // cek apakah produk sudah ada -> kalau ada, tambah qty
      const existingIndex = state.items.findIndex((i) => i.nama === action.payload.nama);
      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          qty: updatedItems[existingIndex].qty + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // kalau belum ada, push item baru dengan qty 1
        return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
      }

    case "REMOVE_FROM_CART":
      // hapus item berdasarkan nama
      return { ...state, items: state.items.filter((i) => i.nama !== action.payload.nama) };

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "DECREASE_QTY":
      const index = state.items.findIndex((i) => i.nama === action.payload.nama);

      // Jika tidak ditemukan produk → tidak perlu ubah apa-apa
      if (index < 0) return state;

      const updated = [...state.items];

      // Jika qty lebih dari 1 → kurangi qty
      if (updated[index].qty > 1) {
        updated[index] = {
          ...updated[index],
          qty: updated[index].qty - 1,
        };
        return { ...state, items: updated };
      }

      // Jika qty jadi 0 → hapus produk dari cart
      return {
        ...state,
        items: state.items.filter((i) => i.nama !== action.payload.nama),
      };

    default:
      return state;
  }
}
