import { CardPokemon } from '@/components/CardPokemon';
import { getPokemon } from '@/components/CardPokemon/getPokemon';

interface PokemonIdProps {
  params: {
    id: string;
  };
}

export default async function About({ params }: PokemonIdProps) {
  const getPokemonID = await getPokemon(params);

  return (
    <div>
      <p>Nome: {getPokemonID.PokemonData[0].name}</p>
      <CardPokemon />
    </div>
  );
}
