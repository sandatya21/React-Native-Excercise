// CartScreen.jsx
import React from "react";
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./actions/cartActions";

export default function CartScreen() {
  const items = useSelector((state) => state.cart.items); // ambil dari Redux store
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.gambar }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.nama}</Text>
        <Text>Harga: Rp {item.harga.toLocaleString()}</Text>
        <Text>Jumlah: {item.qty}</Text>
        <Button title="Hapus" onPress={() => dispatch(removeFromCart(item))} />
      </View>
    </View>
  );

  const total = items.reduce((s, it) => s + it.harga * it.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Isi Keranjang</Text>
      {items.length === 0 ? (
        <Text>Keranjang kosong</Text>
      ) : (
        <>
          <FlatList data={items} keyExtractor={(i) => i.nama} renderItem={renderItem} />
          <Text style={styles.total}>Total: Rp {total.toLocaleString()}</Text>
          <Button title="Bersihkan Keranjang" onPress={() => dispatch(clearCart())} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  item: { flexDirection: "row", marginBottom: 12, alignItems: "center" },
  image: { width: 80, height: 80, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "600" },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
});
