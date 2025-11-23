import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Hitungan: {count}</Text>
      <Button title="Tambah" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
