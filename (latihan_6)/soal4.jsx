import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: 80, height: 80, backgroundColor: "red", margin: 10 }} />
        <View style={{ width: 80, height: 80, backgroundColor: "green", margin: 10 }} />
        <View style={{ width: 80, height: 80, backgroundColor: "blue", margin: 10 }} />
      </View>
    </View>
  );
}
