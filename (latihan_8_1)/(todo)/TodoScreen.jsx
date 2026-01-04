import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function TodoScreen() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), text },
    });
    setText("");
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Tulis todo..." value={text} onChangeText={setText} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />

      <Button title="Tambah" onPress={addTodo} />

      {todos.map((t) => (
        <View key={t.id} style={{ marginTop: 10 }}>
          <Text>{t.text}</Text>
          <Button title="Hapus" onPress={() => deleteTodo(t.id)} />
        </View>
      ))}
    </View>
  );
}
