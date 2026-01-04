// TodoScreen.jsx (Tanpa Redux)
import React, { useState } from "react";
import { View, TextInput, Button, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoScreen() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    const item = { id: Date.now().toString(), text };
    setTodos((prev) => [item, ...prev]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Tulis todo..." value={text} onChangeText={setText} style={styles.input} />
      <Button title="Tambah" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ flex: 1 }}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.delete}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  input: { borderWidth: 1, padding: 8, marginBottom: 8 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 8 },
  delete: { color: "red", marginLeft: 8 },
});
