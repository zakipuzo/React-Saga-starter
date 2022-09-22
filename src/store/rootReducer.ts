import { combineReducers } from "redux";
import pokemonsReducer from "./pokemon/list/reducer"
import pokemonDetailsReducer from "./pokemon/details/reducer"
const rootReducer=combineReducers({
    pokemons: pokemonsReducer,
    pokemonDetails:pokemonDetailsReducer
})

export type appState=ReturnType<typeof rootReducer>;

export default rootReducer;