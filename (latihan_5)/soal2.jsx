import React from "react";
import { View, Text } from "react-native";

function ProfileCard(props) {
  return (
    <View>
      <Text>Nama: {props.nama}</Text>
      <Text>Jurusan: {props.jurusan}</Text>
    </View>
  );
}

export default function App() {
  return <ProfileCard nama="Dita" jurusan="Bisnis Digital" />;
}
