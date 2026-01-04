// App.jsx — Menghubungkan Redux Store ke Seluruh Aplikasi

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // impor store Todo
import TodoScreen from "./TodoScreen"; // komponen utama

export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}
