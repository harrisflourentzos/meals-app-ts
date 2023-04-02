import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";

export type RootStackParamList = {
  Categories: NavigatorScreenParams<DrawerParamList>;
  Category: { categoryId: string };
  MealDetails: { mealId: string };
};

export type DrawerParamList = {
  AllCategories: undefined;
  Favourites: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type CategoryStackScreenProps<T> = RootStackScreenProps<"Category">;
export type MealDetailsStackScreenProps<T> =
  RootStackScreenProps<"MealDetails">;

export type CategoriesDrawerScreenProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    RootStackScreenProps<"Categories">
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
