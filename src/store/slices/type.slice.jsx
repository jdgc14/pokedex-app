import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const typeSlice = createSlice({
    name: 'type',
    initialState: 'all',
    reducers: {
        setType: (state, action) => {
            return action.payload;
        }
    }
})

export const { setType } = typeSlice.actions;

export default typeSlice.reducer;