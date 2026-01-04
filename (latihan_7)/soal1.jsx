import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

function Login({ navigation }) {
  return (
    <View>
      <Text>Halaman Login</Text>
      <Button title="Masuk" onPress={() => navigation.navigate("Dashboard")} />
    </View>
  );
}

function Dashboard() {
  return (
    <View>
      <Text>Selamat datang di Dashboard</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
