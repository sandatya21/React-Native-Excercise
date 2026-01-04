// App.jsx (Counter tanpa Redux)
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  // state lokal untuk counter
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {value}</Text>

      <View style={styles.row}>
        <Button title="+" onPress={() => setValue((prev) => prev + 1)} />
        <View style={{ width: 12 }} />
        <Button title="-" onPress={() => setValue((prev) => prev - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  counterText: { fontSize: 40, marginBottom: 20 },
  row: { flexDirection: "row" },
});
