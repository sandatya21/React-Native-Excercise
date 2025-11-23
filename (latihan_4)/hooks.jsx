import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Text>Waktu berjalan: {seconds} detik</Text>
    </View>
  );
}
