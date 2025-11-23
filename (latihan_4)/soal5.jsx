import React from "react";
import { View, Text, Image } from "react-native";

const Profile = ({ nama, bio, fotoUri }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Image source={{ uri: fotoUri }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{nama}</Text>
      <Text style={{ textAlign: "center", marginTop: 5 }}>{bio}</Text>
    </View>
  );
};

const AppProfile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Profile
        nama="Andi"
        bio="Mobile Developer yang sedang belajar React Native"
        fotoUri="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </View>
  );
};

export default AppProfile;
