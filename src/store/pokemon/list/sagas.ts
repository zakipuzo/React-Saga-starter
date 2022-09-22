import axios from "axios";

import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { pokemonsSuccess, pokemonsFailure } from "./actions";
import { POKEMONS_REQUEST } from "./actionTypes";

import { IPokemons } from "./types";

const getPokemons = async (payload: { limit: number; offset: number }) => {
  const { data } = await axios.get<IPokemons>(
    "https://pokeapi.co/api/v2/ability/?limit=" +
      payload.limit +
      "&offset=" +
      payload.offset,
    {
      headers: {
        "Content-type": "application/json ",
        Accept: "application/json",
      },
    }
  );
  return data;
};

function* pokemonsRequestSaga(action: any) {
  try {
    const response: { results: [] } = yield call(getPokemons, {
      limit: action.payload.values.limit,
      offset: action.payload.values.offset,
    });
if(response.results.length){
   //add random color to each pokemmon
    response.results.forEach((el:any)=>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        el.color=randomColor
    })
}
    yield put(
      pokemonsSuccess({
        items: response.results,
      })
    );
    
    action.payload.callback(response.results);
  } catch (e: any) {
    yield put(pokemonsFailure({ error: e.message }));
  }
}

function* pokemonsSaga() {
  yield all([takeEvery(POKEMONS_REQUEST, pokemonsRequestSaga)]);
}

export default pokemonsSaga;
