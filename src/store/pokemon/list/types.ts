import {
  POKEMONS_REQUEST,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,  
} from "./actionTypes";

 
export interface IPokemons {
  results: [];
}

export interface IPokemonsState {
  pending: boolean;
  items:    any[];
  error: string | null;
}

  
export interface IPokemonsSuccessPayload {
  items: [];
}

export interface IPokemonsFailurePayload {
  error: string;
}
 
export interface IPokemonsPayload {
  values: { limit: number; offset: number };
  callback: any;
}

export interface IPokemonsRequest {
  type: typeof POKEMONS_REQUEST;
  payload: IPokemonsPayload;
}

export interface IPokemonsSuccess {
  type: typeof POKEMONS_SUCCESS;
  payload: IPokemonsSuccessPayload;
}

export interface IPokemonsFailure {
  type: typeof POKEMONS_FAILURE;
  payload: IPokemonsFailurePayload;
}
 

export type IPokemonsActions =
  | IPokemonsRequest
  | IPokemonsSuccess
  | IPokemonsFailure  
