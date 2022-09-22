import { createSelector } from "reselect";
import {appState} from "../../rootReducer";
 
 const getPokemonDetails=(state: appState)=>({details:state.pokemonDetails.details, pending:state.pokemonDetails.pending, error:state.pokemonDetails.error });
 
 export const getPokemonDetailsSelector=createSelector(getPokemonDetails,(data)=>data); 

 