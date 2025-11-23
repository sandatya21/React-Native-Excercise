import React from "react";
import { View, Text } from "react-native";

const Header = () => (
  <View>
    <Text style={{ fontSize: 20, marginBottom: 10 }}>Header Aplikasi</Text>
  </View>
);

const Footer = () => (
  <View>
    <Text style={{ marginTop: 10 }}>© 2025 Aplikasi Kita</Text>
  </View>
);

const AppMain = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header />
      <Text>Selamat Datang!</Text>
      <Footer />
    </View>
  );
};

export default AppMain;
