import { CardPokemon } from '@/components/CardPokemon';
import { getPokemon } from '@/components/CardPokemon/getPokemon';

interface PokemonIdProps {
  params: {
    id: string;
  };
}

export default async function Pokemon({ params }: PokemonIdProps) {
  const getPokemonID = await getPokemon(params);

  const { PokemonData, statsPokemonData } = getPokemonID;

  return (
    <div>
      <p>Nome: {PokemonData[0].name}</p>
      <CardPokemon
        pokemonData={PokemonData[0]}
        statsPokemonData={statsPokemonData}
      />
    </div>
  );
}
