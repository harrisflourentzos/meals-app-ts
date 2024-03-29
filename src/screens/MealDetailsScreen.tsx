import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MealDetailsStackScreenProps } from "../navigation/types";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favouriteSlice";
import { RootState } from "../store/redux/store";
// import { useDispatch, useSelector } from "react-redux";
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/redux/hooks";

type Props = {} & MealDetailsStackScreenProps<"MealDetails">;

const MealDetailsScreen = ({ route, navigation }: Props) => {
  const meal = MEALS.find((m) => m.id === route.params.mealId)!;

  const favoritesState = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const isFavourite = favoritesState.ids.includes(meal.id);

  function favouriteButtonPressedHandler() {
    if (!isFavourite) dispatch(addFavorite(meal.id));
    else dispatch(removeFavorite(meal.id));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavourite ? "heart" : "heart-outline"}
            color="white"
            onPress={favouriteButtonPressedHandler}
          />
        );
      },
    });
  }, [navigation, favouriteButtonPressedHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration.toString()}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
