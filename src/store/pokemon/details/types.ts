import {
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAILURE,
} from "./actionTypes";

export interface IResponsePokemonDetails {
  effect_entries: {};
  flavor_text_entries: {};
  is_main_series: boolean;
}

export interface IPokemonDetailsState {
  pending: boolean;
  details: {};
  error: string | null;
}

///Details
export type IPokemonsDetailsPayload = string

export interface IPokemonDetailsSuccessPayload {
  details: {};
}

export interface IPokemonDetailsFailurePayload {
  error: string;
}

export interface IPokemonDetailsRequest {
  type: typeof POKEMON_DETAILS_REQUEST;
  payload: IPokemonsDetailsPayload;
}
export interface IPokemonDetailsSuccess {
  type: typeof POKEMON_DETAILS_SUCCESS;
  payload: IPokemonDetailsSuccessPayload;
}

export interface IPokemonDetailsFailure {
  type: typeof POKEMON_DETAILS_FAILURE;
  payload: IPokemonDetailsFailurePayload;
}

export type IPokemonDetailsActions =
  | IPokemonDetailsRequest
  | IPokemonDetailsSuccess
  | IPokemonDetailsFailure;
