import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Categories: undefined;
  Category: { categoryId: string };
  MealDetails: { mealId: string };
};

export type DrawerParamList = {
  Categories: undefined;
  Favourites: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type CategoriesStackScreenProps<T> = RootStackScreenProps<"Categories">;
export type CategoryStackScreenProps<T> = RootStackScreenProps<"Category">;
export type MealDetailsStackScreenProps<T> =
  RootStackScreenProps<"MealDetails">;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
