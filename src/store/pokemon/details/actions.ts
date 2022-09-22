import {
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAILURE,
} from "./actionTypes";

import {
  IPokemonDetailsRequest,
  IPokemonsDetailsPayload,
  IPokemonDetailsSuccessPayload,
  IPokemonDetailsSuccess,
  IPokemonDetailsFailurePayload,
  IPokemonDetailsFailure,
} from "./types";

//Details

export const pokemonDetailsRequest = (
  payload: IPokemonsDetailsPayload
): IPokemonDetailsRequest => ({
  type: POKEMON_DETAILS_REQUEST,
  payload,
});

export const pokemonDetailsSuccess = (
  payload: IPokemonDetailsSuccessPayload
): IPokemonDetailsSuccess => ({
  type: POKEMON_DETAILS_SUCCESS,
  payload,
});

export const pokemonDetailsFailure = (
  payload: IPokemonDetailsFailurePayload
): IPokemonDetailsFailure => ({
  type: POKEMON_DETAILS_FAILURE,
  payload,
});
