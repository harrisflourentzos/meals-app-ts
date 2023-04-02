import { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { CategoryStackScreenProps } from "../navigation/types";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

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

  function renderMealItem(meal: Meal) {
    return <MealItem meal={meal}></MealItem>;
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => renderMealItem(item)}
    ></FlatList>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
