import {
  POKEMONS_REQUEST,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
} from "./actionTypes";

import {
  IPokemonsSuccess,
  IPokemonsFailure,
  IPokemonsRequest,
  IPokemonsPayload,
  IPokemonsSuccessPayload,
  IPokemonsFailurePayload,
} from "./types";

//LIST
export const pokemonsRequest = (
  payload: IPokemonsPayload
): IPokemonsRequest => ({
  type: POKEMONS_REQUEST,
  payload,
});

export const pokemonsSuccess = (
  payload: IPokemonsSuccessPayload
): IPokemonsSuccess => ({
  type: POKEMONS_SUCCESS,
  payload,
});

export const pokemonsFailure = (
  payload: IPokemonsFailurePayload
): IPokemonsFailure => ({
  type: POKEMONS_FAILURE,
  payload,
});
