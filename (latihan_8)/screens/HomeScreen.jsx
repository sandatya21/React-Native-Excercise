import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const produk = ["Headphone", "Handphone"];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Daftar Produk</Text>

      {produk.map((p) => (
        <View key={p} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16 }}>{p}</Text>
          <Button title="Tambah ke Keranjang" onPress={() => dispatch(addItem(p))} />
        </View>
      ))}

      <View style={{ marginTop: 20 }}>
        <Button title="Lihat Keranjang" onPress={() => navigation.navigate("Cart")} />
      </View>
    </View>
  );
}
