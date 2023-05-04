export interface PokeProps {
  name: string;
  url: string;
}
export async function getListPokemons() {
  const limitPokemon = '?limit=90set20';
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${limitPokemon}`
  );
  const result = await response.json();
  const pokemons: PokeProps[] = result.results;
  return pokemons;
}
