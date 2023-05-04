interface Props {
  id: string;
}

interface PokemonDataProps {
  number: string;
  name: string;
  types: string[];
  abilities: {
    normal: string[];
    hidden: string;
  };
  height: string;
  weight: string;
  sprite: string;
  description: string;
}

interface StatsProps {
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  };
}

export async function getPokemon(props: Props) {
  const [pokemon, statsPokemon] = await Promise.all([
    fetch(`https://pokeapi.glitch.me/v1/pokemon/${props.id}`),

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
  ]);
  const response = await fetch(
    `https://pokeapi.glitch.me/v1/pokemon/${props.id}`
  );
  const PokemonData: PokemonDataProps[] = await pokemon.json();
  const statsPokemonData: StatsProps[] = await statsPokemon.json();

  return { PokemonData, statsPokemonData };
}
