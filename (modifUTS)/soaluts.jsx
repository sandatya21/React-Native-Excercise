import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

export default function SoalUTS() {
  const navigation = useNavigation();

  // data produk (hard-coded)
  const products = [
    {
      id: "p1",
      nama: "Headphone",
      harga: 250000,
      gambar: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113",
    },
    {
      id: "p2",
      nama: "Handphone",
      harga: 1500000,
      gambar: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
  ];

  // header right: tombol ke Cart (bisa dipasang via effect)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerCartBtn} onPress={() => navigation.navigate("Cart")}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Keranjang</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {products.map((p) => (
        <ProductCard key={p.id} id={p.id} nama={p.nama} harga={p.harga} gambar={p.gambar} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerCartBtn: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 12,
  },
});
