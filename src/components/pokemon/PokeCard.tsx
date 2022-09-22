import React, { useEffect } from "react";

interface props {
  pokemon: { name: string; url: string; color: string };
  onClick: any;
}

const PokeCard = ({ pokemon, onClick }: props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      onClick={() => onClick(pokemon.url)}
      className={`p-4 my-4 flex rounded-lg   shadow justify-center items-center border border-solid border-gray-500 w-[160px] h-[160px] cursor-pointer  opacity-90 hover:opacity-100`}
      style={{ background: "#" + pokemon.color }}
    >
      <span className="capitalize text-lg font-bold text-center bg-black text-white px-1 py-1 rounded-sm">
        {pokemon.name.split("-").join(" ")}
      </span>
    </div>
  );
};

export default PokeCard;
