import { all,fork } from "redux-saga/effects";
import pokemonsSaga from "./pokemon/list/sagas";
import pokemonDetailsSaga from "./pokemon/details/sagas";

export function* rootSaga(){
    yield all([fork(pokemonsSaga)])
    yield all([fork(pokemonDetailsSaga)])
}