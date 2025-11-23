import React from "react";
import { View, Text } from "react-native";

const UserCard = ({ nama, umur }) => {
  return (
    <View style={{ padding: 10, borderWidth: 1, margin: 5 }}>
      <Text>Nama: {nama}</Text>
      <Text>Umur: {umur} tahun</Text>
    </View>
  );
};

const AppUser = () => {
  return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
      <UserCard nama="Budi" umur={25} />
      <UserCard nama="Sari" umur={22} />
    </View>
  );
};

export default AppUser;
