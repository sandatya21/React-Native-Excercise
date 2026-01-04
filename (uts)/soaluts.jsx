// soaluts.jsx (diubah agar bisa navigasi ke Cart)
import React from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import ProductCard from "./ProductCard";

export default function SoalUTS({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Tombol di atas untuk buka layar Keranjang */}
      <View style={{ width: "100%", padding: 8 }}>
        <Button title="Buka Keranjang" onPress={() => navigation.navigate("Cart")} />
      </View>

      {/* ScrollView agar jika banyak produk bisa discroll */}
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}>
        <ProductCard nama="Headphone" harga={250000} gambar="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113" />
        <ProductCard nama="Handphone" harga={1500000} gambar="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
