import { CarHome } from '@/components/CardHome';
import { getListPokemons } from '@/components/CardHome/getList';

export default async function Home() {
  const pokemons = await getListPokemons();
  return (
    <article className="p-1 bg-primary h-[100vh]">
      <ul className="px-6 py-3 flex flex-wrap gap-x-4 gap-y-3 bg-white shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] roudend-lg">
        {' '}
        {pokemons.map((item, index) => (
          <li
            key={item.name}
            className="shrink-0 w-[145px] h-[171px] rounded-xl shadow-[0px_1px_3px_1px_rgba(0,0,0,0.2)] transition-all hover:shadow-cyan-500/50 hover:transition-all"
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
  );
}
