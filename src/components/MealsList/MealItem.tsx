import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Meal from "../../models/meal";
import { colors } from "../../styles/colors";

type Props = { children?: JSX.Element; meal: Meal };

function MealItem({ meal }: Props) {
  const navigation = useNavigation();

  function mealItemPressedHandler() {
    navigation.navigate("MealDetails", { mealId: meal.id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealItemPressedHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: colors.Violet100,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    color: "white",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
});
