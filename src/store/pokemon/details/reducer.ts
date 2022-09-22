import { 
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAILURE,
} from "./actionTypes";

import { IPokemonDetailsActions, IPokemonDetailsState } from "./types";

const initialState: IPokemonDetailsState = {
  pending: false,
  details: {},
  error: null,
};

const reducers = (state = initialState, action: IPokemonDetailsActions) => {
  switch (action.type) {
  
    //Details
    case POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case POKEMON_DETAILS_SUCCESS:
      return {
        ...action.payload,
        pending: false,
        error: null,
      };
    case POKEMON_DETAILS_FAILURE:
      return {
        ...action.payload,
        pending: false,
        details: {},
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
