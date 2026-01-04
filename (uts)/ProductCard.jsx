// ProductCard.jsx (update: tambah tombol kurangi qty)
import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty } from "./actions/cartActions";

export default function ProductCard({ nama, harga, gambar }) {
  const dispatch = useDispatch();

  // Ambil jumlah qty item yang sudah ada di keranjang
  const qtyInCart = useSelector((state) => {
    const found = state.cart.items.find((i) => i.nama === nama);
    return found ? found.qty : 0;
  });

  const handleAdd = () => {
    dispatch(addToCart({ nama, harga, gambar }));
  };

  const handleDecrease = () => {
    dispatch(decreaseQty({ nama, harga, gambar }));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: gambar }} style={styles.image} />

      <Text style={styles.name}>{nama}</Text>
      <Text style={styles.price}>Harga: Rp {harga.toLocaleString()}</Text>

      {/* Menampilkan status jumlah item */}
      <Text style={styles.qtyText}>{qtyInCart > 0 ? `Sudah di keranjang: ${qtyInCart} item` : "Belum ada di keranjang"}</Text>

      {/* ------------------------------- */}
      {/* TAMBAH & KURANGI PRODUK ( + - ) */}
      {/* ------------------------------- */}
      <View style={styles.row}>
        {/* Tombol "-" hanya muncul kalau qty > 0 */}
        {qtyInCart > 0 && (
          <TouchableOpacity style={styles.btnMinus} onPress={handleDecrease}>
            <Text style={styles.btnLabel}>-</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.btnPlus} onPress={handleAdd}>
          <Text style={styles.btnLabel}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol default */}
      <Button title="Tambah ke Keranjang" onPress={handleAdd} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    width: 280,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 10,
  },
  qtyText: {
    fontSize: 14,
    marginBottom: 10,
    color: "green",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPlus: {
    width: 40,
    height: 40,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  btnMinus: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  btnLabel: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
