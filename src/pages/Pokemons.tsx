import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import PokeCard from "../components/pokemon/PokeCard";

import PokeModal from "../components/pokemon/PokeModal";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { pokemonDetailsRequest } from "../store/pokemon/details/actions";
import { IPokemonsDetailsPayload } from "../store/pokemon/details/types";

import { pokemonsRequest } from "../store/pokemon/list/actions";
import { getPokemonsSelector } from "../store/pokemon/list/selectors";
import { IPokemonsPayload } from "../store/pokemon/list/types";
/*props types*/
type IGetPokemonsList = (params: IPokemonsPayload) => void;
type IGetPokemonsDetails = (url: IPokemonsDetailsPayload) => void;

interface IPokemon {
  name: string;
  url: string;
  color: string;
}
//Pokemons Page
const Pokemons: React.FC<{
  getPokemonsList: IGetPokemonsList;
  getPokemonsDetails: IGetPokemonsDetails;
}> = ({ getPokemonsList, getPokemonsDetails }) => {
  //State
  const [offset, setOffset]: any = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fetchEnd, setFetchEnd] = useState(false);
  //Fetch Limit
  const limit = 50;

  //infinit scroll hook
  const [isFetching, setIsFetching] = useInfiniteScroll(
    "pokeList",
    fetchPokemons,
    fetchEnd
  );

  const { items, pending, error }: any = useSelector(getPokemonsSelector);

 
  const callback = (data: IPokemon[]) => {
    setIsFetching(false);
    if (data.length === 0) {
      setFetchEnd(true);
    }
  };

  const onPokemonCardClick = (url: string) => {
    getPokemonsDetails(url);
    setShowModal(true);
  };
  function fetchPokemons() {
    let data: IPokemonsPayload = {
      values: {
        limit,
        offset,
      },
      callback,
    };
    getPokemonsList(data);
    setOffset(offset + limit);
  }
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="mt-5 px-3">
      <div id="pokeList" className=" flex justify-evenly  gap-4  flex-wrap">
        {items?.map((pokemon: IPokemon, index: number) => (
          <div key={index + "poke"} className="pokemon" onClick={() => onPokemonCardClick(pokemon.url)} >
            <PokeCard pokemon={pokemon}   />
          </div>
        ))}
      </div>
      {isFetching && !fetchEnd ? "Loading..." : ""}

      {error ? error : ""}
      {showModal ? (
        <PokeModal handleClose={() => setShowModal(false)}></PokeModal>
      ) : (
        ""
      )}
    </div>
  );
};

const mapDispatchToPropos = (dispatch: Dispatch) => ({
  getPokemonsList: (params: IPokemonsPayload) =>
    dispatch(pokemonsRequest(params)),
  getPokemonsDetails: (params: IPokemonsDetailsPayload) =>
    dispatch(pokemonDetailsRequest(params)),
});

export default connect(null, mapDispatchToPropos)(Pokemons);
