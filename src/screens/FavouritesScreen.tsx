import { StyleSheet, Text } from "react-native";
import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useAppSelector as useSelector } from "../store/redux/hooks";
// import { useSelector } from "react-redux";
import { RootState } from "../store/redux/store";

type Props = {};

const FavouritesScreen = (props: Props) => {
  const favoritesIds = useSelector((state: RootState) => state.favorites.ids);

  const meals = MEALS.filter((m) => favoritesIds.includes(m.id));

  return (
    <>
      {meals.length === 0 && (
        <Text style={styles.text}>You have not liked any meals yet!</Text>
      )}
      <MealsList meals={meals} />
    </>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 14, padding: 6, alignSelf: "center" },
});
