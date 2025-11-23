import React from "react";
import { View, Text } from "react-native";

function Greeting(props) {
  return <Text>Hello, {props.nama}!</Text>;
}

export default function Props() {
  return (
    <View>
      <Greeting nama="Alice" />
      <Greeting nama="Bob" />
      <Greeting nama="Charlie" />
    </View>
  );
}
