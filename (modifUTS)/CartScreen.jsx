import React, { useContext } from "react";
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CartContext from "./CartContext";

export default function CartScreen() {
  const { items, removeFromCart, clearCart } = useContext(CartContext);

  const total = items.reduce((s, it) => s + it.harga * it.qty, 0);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      {items.length === 0 ? (
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text>Keranjang kosong</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Image source={{ uri: item.gambar }} style={styles.thumb} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>{item.nama}</Text>
                  <Text>Harga: Rp {Number(item.harga).toLocaleString()}</Text>
                  <Text>Qty: {item.qty}</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={{ color: "red" }}>Hapus</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={{ padding: 12, borderTopWidth: 1, borderTopColor: "#eee" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total: Rp {Number(total).toLocaleString()}</Text>
            <View style={{ marginTop: 8 }}>
              <Button
                title="Bersihkan Keranjang"
                color="#d9534f"
                onPress={() => {
                  Alert.alert("Konfirmasi", "Hapus semua item di keranjang?", [
                    { text: "Batal", style: "cancel" },
                    { text: "Ya", onPress: () => clearCart() },
                  ]);
                }}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
  thumb: { width: 70, height: 50, borderRadius: 6 },
});
