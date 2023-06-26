'use client';
import { StatsProps, PokemonDataProps } from '../CardPokemon/getPokemon';

import { InfoStats } from './Content/InfoStats';
import { Header } from './Content/Header';
import { About } from './Content/About';
import { ContainerImgType } from './Content/ContainerImgType';
import { bgColor } from '../utils';

interface infoCardProps {
  pokemonData: PokemonDataProps;
  statsPokemonData: StatsProps;
}
export const CardPokemon = ({
  pokemonData,
  statsPokemonData
}: infoCardProps) => {
  return (
    <main className=" flex items-center justify-center h-[100vh] bg-black">
      <div
        className={`flex items-center justify-between flex-col w-[360px] h-[640px] ${bgColor(
          pokemonData.types[0].toLowerCase()
        )} p-1 text-white m-auto relative`}
      >
        <Header name={pokemonData.name} number={pokemonData.number} />

        <div className="w-full h-[412px] bg-white text-black shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] rounded-lg">
          <ContainerImgType pokemonData={pokemonData} />

          <div className="mt-[92px]">
            <About
              pokemonData={pokemonData}
              weight={statsPokemonData.weight}
              height={statsPokemonData.height}
            />

            <p className="h-[60px] text-200 text-blackdarck text-left mx-auto w-[300px]">
              {pokemonData.description}
            </p>

            <InfoStats
              pokemonDataType={pokemonData.types[0]}
              statsPokemonData={statsPokemonData}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
