import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "./src/navigation/types";
import { DrawerParamList } from "./src/navigation/types";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import FavouritesScreen from "./src/screens/FavouritesScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import { colors } from "./src/styles/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function renderDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.Violet900 },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: colors.Violet800 },
        drawerContentStyle: { backgroundColor: colors.Violet900 },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: colors.Violet800,
        drawerActiveBackgroundColor: colors.Violet100,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: colors.Violet900 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: colors.Violet800 },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={renderDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Category" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
