import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const GalleryApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10, backgroundColor: "#eee" }}>
        <Text style={{ fontSize: 18 }}>Galeri Gambar</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
          style={{ width: "100%", height: 200, marginBottom: 10 }}
        />
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
          style={{ width: "100%", height: 200, marginBottom: 10 }}
        />
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
          style={{ width: "100%", height: 200, marginBottom: 10 }}
        />
      </ScrollView>

      <View style={{ padding: 10, alignItems: "center" }}>
        <Text>© 2025 Galeri App</Text>
      </View>
    </View>
  );
};

export default GalleryApp;
