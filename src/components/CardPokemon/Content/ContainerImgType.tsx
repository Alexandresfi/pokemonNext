import Image from 'next/image';

import { bgColor } from '@/components/utils';
import { PokemonDataProps } from '../getPokemon';

interface Props {
  pokemonData: PokemonDataProps;
}

export function ContainerImgType({ pokemonData }: Props) {
  return (
    <div className="absolute text-center bottom-[336px] right-0 left-0 ">
      <Image
        src={pokemonData.sprite}
        alt={pokemonData.name}
        priority={true}
        quality={30}
        width={200}
        height={200}
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
  );
}
