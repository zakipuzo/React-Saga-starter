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
      <div className=" fixed inset-0  bg-[#00000096]  ">
        <div className="max-w-xl mx-auto bg-white min-h-screen px-2  ">
          <div className="flex justify-end px-1">
            <div
              className="hover:underline cursor-pointer bg-red-600 px-3 py-2 rounded-lg my-2 text-white"
              onClick={() => handleClose()}
            >
              Close
            </div>
          </div>
          <div>
            {pending ? (
              <PokeLoader />
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h2 className="capitalize text-xl font-bold">
                    {details.name.split("-").join(" ")}
                  </h2>
                  <span className="text-sm bg-green-500 text-white px-2"> {details?.is_main_series ? "Main Series" : ""}</span>
                </div>
                <div>
                  <h3 className="underline">Short effect</h3>

                  <div>
                    {
                      details?.effect_entries?.find(
                        (x: any) => x?.language?.name === "en"
                      )?.short_effect
                    }
                  </div>
                </div>

                <div>
                  <h3 className="underline">Effect</h3>
                  <div>
                    {
                      details?.effect_entries?.find(
                        (x: any) => x?.language?.name === "en"
                      )?.effect
                    }
                  </div>
                </div>
                <div>
                  <h3 className="underline">Flavor</h3>
                  <div>
                    {
                      details?.flavor_text_entries?.find(
                        (x: any) => x?.language?.name === "en"
                      )?.flavor_text
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
