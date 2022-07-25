import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import pokemons from './slices/pokemons.slice'



export default configureStore({
  reducer: {
    user,
    pokemons ///dont work
	}
})