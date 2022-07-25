import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import type from './slices/type.slice'
import pokemons from './slices/pokemons.slice'



export default configureStore({
  reducer: {
    user,
    type,
    pokemons ///dont work
	}
})