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
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function RenderDrawer() {
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
        name="AllCategories"
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
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Provider store={store}>
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
            component={RenderDrawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Category" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
