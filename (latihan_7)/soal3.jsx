import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { Text } from "react-native";

function Home() {
  return <Text>Ini Home</Text>;
}
function About() {
  return <Text>Aplikasi React Navigation</Text>;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
