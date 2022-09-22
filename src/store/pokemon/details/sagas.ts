import axios from "axios";

import { all, call, put, takeLatest } from "redux-saga/effects";
import { pokemonDetailsSuccess, pokemonDetailsFailure } from "./actions";
import { POKEMON_DETAILS_REQUEST } from "./actionTypes";

import { IResponsePokemonDetails } from "./types";

const getPokemonDetails = async (payload: string) => {
 
  const { data } = await axios.get<IResponsePokemonDetails>(payload, {
    headers: {
      "Content-type": "application/json ",
      Accept: "application/json",
    },
  });
  return data;
};

function* pokemonDetailsRequestSaga(action: any) {
  try {
    const response: { results: [] } = yield call(
      getPokemonDetails,
      action.payload
    );

    yield put(
      pokemonDetailsSuccess({
        details: response,
      })
    );
    // action.payload.callback(response)
  } catch (e: any) {
    yield put(pokemonDetailsFailure({ error: e.message }));
  }
}

function* pokemonDetailsSaga() {
  yield all([takeLatest(POKEMON_DETAILS_REQUEST, pokemonDetailsRequestSaga)]);
}

export default pokemonDetailsSaga;
