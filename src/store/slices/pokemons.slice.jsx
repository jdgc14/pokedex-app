import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
    name: 'pokemons',
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

export const { addFavorite, deleteFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;