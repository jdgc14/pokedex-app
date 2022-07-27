import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setPokemons: (state, action) => {
            return action.payload
        }
    }
})

export const getPokemonsByType = (type) => (dispatch) => {
    // dispatch(setIsLoading(true));
    if (type === 'all') {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1154')
            .then(res => dispatch(setPokemons(res.data.results)))
            // .finally(() => dispatch(setIsLoading(false)))
    } else {
        axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            .then(res => dispatch(setPokemons(res.data.pokemon.map(pokemon => pokemon.pokemon))))
            // .finally(() => dispatch(setIsLoading(false)))
    }
        
}

export const { setPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
