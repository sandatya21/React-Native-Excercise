import React, { useState, useContext } from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartContext from "./CartContext";

export default function ProductCard({ id, nama, harga, gambar }) {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const [localCount, setLocalCount] = useState(0);

  const onAddToCart = () => {
    setLocalCount((c) => c + 1);
    addToCart({ id, nama, harga, gambar });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { id, nama, harga, gambar })}>
        <Image source={{ uri: gambar }} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.name}>{nama}</Text>
      <Text style={styles.price}>Harga: Rp {Number(harga).toLocaleString()}</Text>

      <View style={{ width: "100%", marginTop: 8 }}>
        <Button title="Tambah ke Keranjang" onPress={onAddToCart} color="#007AFF" />
      </View>

      <Text style={styles.counter}>Jumlah ditambah (lokal): {localCount}</Text>
      <TouchableOpacity style={styles.detailBtn} onPress={() => navigation.navigate("ProductDetail", { id, nama, harga, gambar })}>
        <Text style={{ color: "#fff" }}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    width: 300,
    marginBottom: 16,
  },
  image: {
    width: 220,
    height: 140,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
  counter: {
    marginTop: 8,
    fontSize: 14,
    fontStyle: "italic",
  },
  detailBtn: {
    marginTop: 10,
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
