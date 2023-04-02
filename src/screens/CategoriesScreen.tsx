import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Category from "../models/category";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";
import { CategoriesDrawerScreenProps } from "../navigation/types";

const CategoriesScreen = ({
  navigation,
}: CategoriesDrawerScreenProps<"AllCategories">) => {
  function categoryPressedHanlder(categoryId: string) {
    navigation.navigate("Category", { categoryId: categoryId });
  }

  function renderCategoriesHelper(item: Category) {
    return (
      <CategoryTile
        title={item.title}
        color={item.color}
        onPress={() => categoryPressedHanlder(item.id)}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoriesHelper(item)}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
