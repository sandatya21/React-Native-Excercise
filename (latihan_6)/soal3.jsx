import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  { id: "1", nama: "Laptop" },
  { id: "2", nama: "Keyboard" },
  { id: "3", nama: "Mouse" },
  { id: "4", nama: "Monitor" },
];

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            {item.nama}
          </Text>
        )}
      />
    </View>
  );
}
