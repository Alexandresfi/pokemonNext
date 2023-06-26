'use client';
import { abbreviations, bgColor, textColor } from '../../utils';
import { StatsProps } from '../getPokemon';

interface infoStatsPorps {
  pokemonDataType: string;
  statsPokemonData: StatsProps;
}

export function InfoStats({
  pokemonDataType,
  statsPokemonData
}: infoStatsPorps) {
  return (
    <div className=" m-auto">
      <p
        className={`font-bold mb-1 mx-auto ${textColor(
          pokemonDataType.toLowerCase()
        )} text-center text-300`}
      >
        Base Stats
      </p>

      <div className="flex items-center gap-4 w-[300px] m-auto">
        <ul className=" pr-10 border-r-2 border-r-bordercolor w-[31px]">
          {statsPokemonData.stats.map((item, index) => (
            <li
              key={index}
              className={`font-bold mb-1 mx-auto ${textColor(
                pokemonDataType.toLowerCase()
              )} text-left text-200`}
            >
              <span>{abbreviations(item.stat.name)}</span>
            </li>
          ))}
        </ul>
        <ul className="w-full">
          {statsPokemonData.stats.map((item, index) => (
            <li key={index} className="flex items-center mb-1">
              <label
                htmlFor="stat"
                className="text-blackdarck text-200 block w-8 "
              >
                {item.base_stat}
              </label>

              <div className=" relative">
                <div
                  className={`w-[209px] h-1 rounded opacity-20 ${bgColor(
                    pokemonDataType.toLowerCase()
                  )}`}
                ></div>
                <div
                  className={`h-1 rounded opacity-100 absolute top-0 ${bgColor(
                    pokemonDataType.toLowerCase()
                  )} max-w-full`}
                  style={{ width: `${item.base_stat}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
