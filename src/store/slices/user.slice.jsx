import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        avatar: '',
        pokemons: [],
        pokemonsVisibles: 6,
        isDarkMode: false,
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        changePokemonsVisibles: (state, action) => {
            state.pokemonsVisibles = action.payload;
        },
        changeIsDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        }

    }
})

export const { changeName, changeAvatar, changePokemonsVisibles, changeIsDarkMode, } = userSlice.actions;

export default userSlice.reducer;