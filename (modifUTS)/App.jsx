import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SoalUTS from "./soaluts";
import ProductDetail from "./ProductDetail";
import CartScreen from "./CartScreen";
import { CartProvider } from "./CartContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={SoalUTS} options={{ title: "Daftar Produk" }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={({ route }) => ({ title: route.params?.nama ?? "Detail Produk" })} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Keranjang" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
