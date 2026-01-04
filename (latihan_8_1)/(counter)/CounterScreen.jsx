import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function CounterScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Counter: {count}</Text>

      <Button title="Tambah (+)" onPress={() => dispatch({ type: "INCREMENT" })} />
      <Button title="Kurangi (-)" onPress={() => dispatch({ type: "DECREMENT" })} />
    </View>
  );
}
