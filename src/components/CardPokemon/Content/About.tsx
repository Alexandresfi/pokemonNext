'use client';
import Image from 'next/image';

import IconWeight from '../../../assets/icons/icon-weight.png';
import IconHeight from '../../../assets/icons/icon-height.png';

import { formatHeight, formatWeight, textColor } from '../../utils';

import { PokemonDataProps } from '../getPokemon';

interface AboutProps {
  pokemonData: PokemonDataProps;
  weight: number;
  height: number;
}

export function About({ pokemonData, weight, height }: AboutProps) {
  return (
    <div className="m-auto mb-8">
      <p
        className={`font-bold text-300 text-center ${textColor(
          pokemonData.types[0].toLowerCase()
        )}`}
      >
        About
      </p>
      <div className="w-[300px] h-12 flex items-center justify-between m-auto">
        <div>
          <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
            <Image src={IconWeight} width={16} height={16} alt="icon weight" />
            <span className="text-200">{formatWeight(weight)} kg</span>
          </p>
          <p className="text-center text-100 leading-3 mt-1 text-grayscale">
            Weight
          </p>
        </div>
        <div className="border-r-2 border-r-bordercolor border-l-2 border-l-bordercolor">
          <p className="flex items-center justify-center gap-2 py-2 w-[103.33px]">
            <Image src={IconHeight} width={16} height={16} alt="icon height" />
            <span className="text-200">{formatHeight(height)} m</span>
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
  );
}
