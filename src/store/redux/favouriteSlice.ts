import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[];
}

const initialState: FavoriteState = {
  ids: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.ids = state.ids.filter((id) => action.payload != id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
