import { createSelector } from "reselect";
import {appState} from "../../rootReducer";
 
 const getPokemons=(state: appState)=>({items:state.pokemons.items, pending:state.pokemons.pending, error:state.pokemons.error });
 
 export const getPokemonsSelector=createSelector(getPokemons,(data)=>data); 