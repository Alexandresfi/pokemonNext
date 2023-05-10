import Link from 'next/link';
import Image from 'next/image';

import IconWeight from '../../assets/icons/icon-weight.png';
import IconHeight from '../../assets/icons/icon-height.png';

import {
  abbreviations,
  bgColor,
  textColor,
  formatHeight,
  formatId,
  formatWeight
} from '../utils';

import { StatsProps, PokemonDataProps } from '../CardPokemon/getPokemon';

import IconBack from '../../assets/icons/icon-back.png';

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
        <div className="flex items-center justify-between p-5 w-full">
          <Link href={'/'} className="flex items-center">
            <Image
              src={IconBack}
              width={20.93}
              height={20.93}
              alt="icon voltar"
              className="mt-[3px]"
            />

            <h1 className=" text-2xl ml-2 font-bold">{pokemonData.name}</h1>
          </Link>
          <span className="text-xs font-bold mt-[7px]">
            {formatId(Number(pokemonData.number))}
          </span>
        </div>
        <div className="w-full h-[412px] bg-white text-black shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] rounded-lg">
          <div className="absolute text-center bottom-[336px] right-0 left-0 ">
            <Image
              src={pokemonData.sprite}
              width={200}
              height={200}
              alt={pokemonData.name}
              className="m-auto"
            />
            <div className="w-[360px] m-auto flex items-center justify-center gap-4">
              {pokemonData.types.map((item, index) => (
                <span
                  className={`${bgColor(
                    item.toLowerCase()
                  )} text-center text-white px-2 py-1 rounded-[10px] font-bold text-100 m-0 mt-1`}
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-[92px]">
            <div className="m-auto mb-8">
              <p
                className={`font-bold text-300 text-center ${textColor(
                  pokemonData.types[0].toLowerCase()
                )}`}
              >
                About
              </p>
              <div className="w-[312px] h-12 flex items-center justify-between m-auto">
                <div>
                  <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
                    <Image
                      src={IconWeight}
                      width={16}
                      height={16}
                      alt="icon weight"
                    />
                    <span className="text-200">
                      {formatWeight(statsPokemonData.weight)} kg
                    </span>
                  </p>
                  <p className="text-center text-100 leading-3 mt-1 text-grayscale">
                    Weight
                  </p>
                </div>
                <div className="border-r-2 border-r-bordercolor border-l-2 border-l-bordercolor">
                  <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
                    <Image
                      src={IconHeight}
                      width={16}
                      height={16}
                      alt="icon height"
                    />
                    <span className="text-200">
                      {formatHeight(statsPokemonData.height)} m
                    </span>
                  </p>
                  <p className="text-center text-100 leading-3 mt-1 text-grayscale">
                    Height
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-center flex-col py-1 w-[103.33px]">
                    <span className="text-200 leading-4 text-blackdarck">
                      {pokemonData.abilities.normal[0]}
                    </span>
                    <span className="text-200 leading-4 text-blackdarck">
                      {pokemonData.abilities.hidden[0]}
                    </span>
                  </p>
                  <p className="text-center text-100 leading-3 mt-1 text-grayscale">
                    Moves
                  </p>
                </div>
              </div>
            </div>

            <p className="h-[60px] text-200 text-blackdarck text-center mx-auto mb-4 px-5">
              {pokemonData.description}
            </p>

            <div className=" m-auto">
              <p
                className={`font-bold mb-1 mx-auto ${textColor(
                  pokemonData.types[0].toLowerCase()
                )} text-center text-300`}
              >
                Base Stats
              </p>

              <div className="flex items-center gap-4 w-[312px] m-auto">
                <ul className=" pr-16 border-r-2 border-r-bordercolor w-[31px]">
                  {statsPokemonData.stats.map((item, index) => (
                    <li
                      key={index}
                      className={`font-bold mb-1 mx-auto ${textColor(
                        pokemonData.types[0].toLowerCase()
                      )} text-left text-200`}
                    >
                      <span>{abbreviations(item.stat.name)}</span>
                    </li>
                  ))}
                </ul>
                <ul className="w-full">
                  {statsPokemonData.stats.map((item, index) => (
                    <li key={index} className="flex items-center mb-1">
                      <label
                        htmlFor="stat"
                        className="mr-4 text-blackdarck text-200 block w-8 "
                      >
                        {item.base_stat}
                      </label>

                      <div className=" relative">
                        <div
                          className={`w-[180px] h-1 rounded opacity-20 ${bgColor(
                            pokemonData.types[0].toLowerCase()
                          )}`}
                        ></div>
                        <div
                          className={`h-1 rounded opacity-100 absolute top-0 ${bgColor(
                            pokemonData.types[0].toLowerCase()
                          )}`}
                          style={{ width: `${item.base_stat}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
