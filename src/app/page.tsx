import { Poppins } from 'next/font/google';
import { CarHome } from '@/components/CardHome';
import { Header } from '@/components/Header';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin']
});

export interface PokeProps {
  name: string;
  url: string;
}
async function getListPokemons() {
  const limitPokemon = '?limit=111';
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${limitPokemon}`
  );
  const result = await response.json();
  const pokemons: PokeProps[] = result.results;
  return pokemons;
}

export default async function Home() {
  const pokemons = await getListPokemons();
  return (
    <main className={poppins.className}>
      <Header />
      <article className="p-1 bg-primary">
        <ul className="px-2 py-3 flex flex-wrap justify-center gap-x-4 gap-y-3 bg-white shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] roudend-lg sm:px-6">
          {' '}
          {pokemons.map((item, index) => (
            <li
              key={item.name}
              className="shrink-0 w-[145px] h-[185px] rounded-xl shadow-[0px_1px_3px_1px_rgba(0,0,0,0.2)] transition-all hover:shadow-cyan-500/50 hover:transition-all"
            >
              <CarHome
                pokemon={{
                  id: index + 1,
                  name: item.name,
                  url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`
                }}
              />
            </li>
          ))}{' '}
        </ul>
      </article>
    </main>
  );
}
