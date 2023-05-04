import Image from 'next/image';
import Link from 'next/link';

interface PokemonProps {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemon: PokemonProps;
}

export const CarHome = ({ pokemon }: Props) => {
  //url api: https://pokeapi.co/api/v2/pokemon/?limit=10set20

  return (
    <Link
      className="flex flex-col justify-center items-center p-1"
      href={`/pokemon/${pokemon.id}`}
    >
      <div className="self-end text-xs text-grayscale pt-1 pr-2">
        #0{pokemon.id}
      </div>
      <Image src={pokemon.url} width={120} height={120} alt={pokemon.name} />
      <p className="text-blackdarck text-sm capitalize">{pokemon.name}</p>
    </Link>
  );
};
