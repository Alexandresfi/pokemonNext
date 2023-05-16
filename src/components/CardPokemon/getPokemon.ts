interface Props {
  id: string;
}

export interface PokemonDataProps {
  number: string;
  name: string;
  types: string[];
  abilities: {
    normal: string[];
    hidden: string[];
  };
  sprite: string;
  description: string;
}

export interface StatsProps {
  weight: number;
  height: number;
  stats: StatsPokemonProps[];
}

export interface StatsPokemonProps {
  base_stat: number;
  stat: {
    name: string;
  };
}

export async function getPokemon(props: Props) {
  const [pokemon, statsPokemon] = await Promise.all([
    fetch(`https://pokeapi.glitch.me/v1/pokemon/${props.id}`),

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
  ]);
  const PokemonData: PokemonDataProps[] = await pokemon.json();
  const statsPokemonData: StatsProps = await statsPokemon.json();

  return { PokemonData, statsPokemonData };
}
