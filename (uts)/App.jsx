// App.jsx
import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // store Redux
import { NavigationContainer, NavigationHelpersContext, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SoalUTS from "./soaluts"; // layar Home (file asli Anda, sedikit diubah)
import CartScreen from "./cartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    // Provider membuat Redux store tersedia ke semua komponen anak
    <Provider store={store}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={SoalUTS} options={{ title: "Daftar Produk" }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Keranjang" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
