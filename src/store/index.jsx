import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import type from './slices/type.slice'
import pokemons from './slices/pokemons.slice'
import pokemonsFavorites from './slices/pokemonsFavorites.slice'



export default configureStore({
  reducer: {
    user,
    type,
    pokemons,
    pokemonsFavorites,
  }
})