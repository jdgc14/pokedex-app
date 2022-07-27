import { createSlice } from '@reduxjs/toolkit';

export const pokemonsFavoritesSlice = createSlice({
    name: 'pokemonsFavorfites',
    initialState: [],
    reducers: { 
        addFavorite: (state, action) => {
            state.push(action.payload)
        },
        deleteFavorite: (state, action) => {
            state.splice(action.payload, 1)
        },
        resetFavorites: (state, action) => {
            return []
        }
    }
})

export const { addFavorite, deleteFavorite, resetFavorites } = pokemonsFavoritesSlice.actions;

export default pokemonsFavoritesSlice.reducer;