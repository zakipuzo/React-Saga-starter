import React from "react";
import "./pokeloader.css";
type Props = {};

export default function PokeLoader({}: Props) {
  return (
    <>
      <div className=" fixed inset-0 flex justify-center items-center bg-[#ffffff80] min-h-screen z-20 ">
        <div className="pokeball ">
          <div className="pokeball__button"></div>
        </div>
      </div>
    </>
  );
}
