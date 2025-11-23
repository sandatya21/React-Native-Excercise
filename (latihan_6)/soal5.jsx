import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

export default function App() {
  const [nama, setNama] = useState("");
  const [daftar, setDaftar] = useState([]);

  const tambahNama = () => {
    if (nama.trim() !== "") {
      setDaftar([...daftar, { id: Date.now().toString(), nama }]);
      setNama("");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Masukkan nama mahasiswa"
        value={nama}
        onChangeText={setNama}
      />
      <Button title="Tambah" onPress={tambahNama} />
      <FlatList style={{ marginTop: 20 }} data={daftar} keyExtractor={(item) => item.id} renderItem={({ item }) => <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item.nama}</Text>} />
    </View>
  );
}
