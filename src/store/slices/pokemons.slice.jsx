import { createSlice } from '@reduxjs/toolkit';

// dont work
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: { 

        getPokemonByType : (type) => {
            if (type === 'all') {
                axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1154')
                    .then(res => res.data.results)
        }   else {
            axios.get(`https://pokeapi.co/api/v2/type/${type}`)
                .then(res => res.data.pokemon.map(pokemon => pokemon.pokemon))
        }
        }
    }
})

export const { getPokemonByType } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;