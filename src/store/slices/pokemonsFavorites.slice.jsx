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
        }
    }
})

export const { addFavorite, deleteFavorite } = pokemonsFavoritesSlice.actions;

export default pokemonsFavoritesSlice.reducer;