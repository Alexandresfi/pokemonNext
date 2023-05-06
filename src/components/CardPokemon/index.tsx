import Link from 'next/link';
import Image from 'next/image';

import IconWeight from '../../assets/icons/icon-weight.png';
import IconHeight from '../../assets/icons/icon-height.png';

import {
  abbreviations,
  bgColor,
  formatHeight,
  formatId,
  formatWeight,
  textColor
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
    <main className="bg-black">
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
            />

            <h1 className=" text-2xl ml-2 font-bold">{pokemonData.name}</h1>
          </Link>
          <span className="text-xs font-bold">
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
                  )} text-center text-white px-2 py-1 rounded-[10px] font-bold text-sm m-0 mt-1`}
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
                className={`font-bold text-base text-center ${textColor(
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
                    <span>{formatWeight(statsPokemonData.weight)} kg</span>
                  </p>
                  <p className="text-center text-[12px] leading-3 mt-1 text-grayscale">
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
                    <span>{formatHeight(statsPokemonData.height)} m</span>
                  </p>
                  <p className="text-center text-[12px] leading-3 mt-1 text-grayscale">
                    Height
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-center flex-col py-1 w-[103.33px]">
                    <span className="text-[13px] leading-4 text-blackdarck">
                      {pokemonData.abilities.normal[0]}
                    </span>
                    <span className="text-[13px] leading-4 text-blackdarck">
                      {pokemonData.abilities.hidden[0]}
                    </span>
                  </p>
                  <p className="text-center text-[12px] leading-3 mt-1 text-grayscale">
                    Moves
                  </p>
                </div>
              </div>
            </div>

            <div>Onde ficará a descrição do pokemon</div>

            <div>
              component mais complexo, onde terá as informações sobre as
              estatisticas de hp, ataque, defesa e tal
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
