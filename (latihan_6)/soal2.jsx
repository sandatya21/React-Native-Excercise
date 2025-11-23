import React from "react";
import { ScrollView, Text } from "react-native";

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {[...Array(20)].map((_, i) => (
        <Text key={i} style={{ marginVertical: 10 }}>
          Item ke-{i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
