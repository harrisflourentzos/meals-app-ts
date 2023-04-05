import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

type Props = { meals: Meal[] };

const MealsList = (props: Props) => {
  function renderMealItem(meal: Meal) {
    return <MealItem meal={meal}></MealItem>;
  }

  return (
    <FlatList
      data={props.meals}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => renderMealItem(item)}
    ></FlatList>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
