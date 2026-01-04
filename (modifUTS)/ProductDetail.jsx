import React, { useContext } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import CartContext from "./CartContext";

export default function ProductDetail({ route }) {
  const { id, nama, harga, gambar } = route.params || {};
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: gambar }} style={styles.image} />
      <Text style={styles.name}>{nama}</Text>
      <Text style={styles.price}>Rp {Number(harga).toLocaleString()}</Text>
      <View style={{ width: "80%", marginTop: 12 }}>
        <Button title="Tambah ke Keranjang" onPress={() => addToCart({ id, nama, harga, gambar })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  image: { width: 300, height: 200, borderRadius: 8, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  price: { fontSize: 16 },
});
