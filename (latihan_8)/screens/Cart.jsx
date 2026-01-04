import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/CartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Keranjang Belanja</Text>

      {items.length === 0 ? (
        <Text>Keranjang masih kosong</Text>
      ) : (
        items.map((item, index) => (
          <View key={index} style={{ marginVertical: 8 }}>
            <Text style={{ fontSize: 16 }}>{item}</Text>
            <Button title="Hapus" onPress={() => dispatch(removeItem(item))} />
          </View>
        ))
      )}
    </View>
  );
}
