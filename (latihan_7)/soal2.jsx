import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

function Home() {
  return <Text>Ini Home</Text>;
}
function Search() {
  return <Text>Ini Search</Text>;
}
function Profile() {
  return <Text>Ini halaman Profil Saya</Text>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              title: "Seacrh",
              tabBarIcon: ({ color }) => <Feather name="search" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color="black" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
