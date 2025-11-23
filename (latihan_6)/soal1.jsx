import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Masukkan nama:</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          marginVertical: 10,
          padding: 8,
          borderRadius: 5,
        }}
        placeholder="Ketik nama kamu di sini"
        onChangeText={(text) => setNama(text)}
      />
      <Text>Halo, {nama}!</Text>
    </View>
  );
}
