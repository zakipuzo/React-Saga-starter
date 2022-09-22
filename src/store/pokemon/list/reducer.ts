import {
  POKEMONS_REQUEST,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
} from "./actionTypes";

import { IPokemonsActions, IPokemonsState } from "./types";

const initialState: IPokemonsState = {
  pending: false,
  items: [] ,
  error: null,
};

const reducers = (state = initialState, action: IPokemonsActions) => {
  switch (action.type) {
    case POKEMONS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case POKEMONS_SUCCESS:
      return {
        items:[...state.items, ...action.payload.items] ,
        pending: false,
        error: null,
      };
    case POKEMONS_FAILURE:
      return {
        ...action.payload,
        pending: false,
        items: [],
      };
 
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
