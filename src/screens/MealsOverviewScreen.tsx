import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { CategoryStackScreenProps } from "../navigation/types";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({
  route,
  navigation,
}: CategoryStackScreenProps<"Category">) {
  const categoryTitle = CATEGORIES.find(
    (c) => c.id === route.params?.categoryId
  )?.title;

  useEffect(() => {
    navigation.setOptions({ title: categoryTitle });
  }, [categoryTitle, navigation]);

  const meals = MEALS.filter((m) =>
    m.categoryIds.includes(route.params?.categoryId!)
  );

  return <MealsList meals={meals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
