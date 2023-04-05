import { createContext, useState } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

const INITIAL_STATE = {
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
};

export const FavoritesContext =
  createContext<FavoritesContextType>(INITIAL_STATE);

function FavoritesContextProvider({ children }: { children: JSX.Element }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([] as string[]);

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds: string[]) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
