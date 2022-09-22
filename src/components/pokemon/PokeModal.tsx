import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPokemonDetailsSelector } from "../../store/pokemon/details/selectors";
import PokeLoader from "./PokeLoader";

type Props = {
  handleClose: () => void;
};

export default function Modal({ handleClose }: Props) {
  const { details, pending, error }: any = useSelector(
    getPokemonDetailsSelector
  );

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div className="">
      <div className=" fixed inset-0  bg-[#ffffff70]  ">
        <div className="max-w-xl mx-auto bg-white min-h-screen  ">
          <div className="flex justify-end px-1">
            <div
              className="hover:underline cursor-pointer"
              onClick={() => handleClose()}
            >
              Close
            </div>
          </div>
          <div>{pending ? <PokeLoader /> : <p>{details.id}</p>}</div>
        </div>
      </div>
    </div>
  );
}
