export function formatId(id: number) {
  if (id.toLocaleString().length === 1) {
    return `#00${id}`;
  } else if (id.toLocaleString().length >= 3) {
    return `#${id}`;
  } else {
    return `#0${id}`;
  }
}

export function formatWeight(weight: number) {
  return (weight / 10).toLocaleString('pt-BR', { minimumFractionDigits: 1 });
}

export function formatHeight(height: number) {
  return (height / 10).toLocaleString('pt-BR', { minimumFractionDigits: 1 });
}

export function abbreviations(stats: string) {
  let value = '';
  switch (stats) {
    case 'hp':
      value = 'HP';
      break;

    case 'attack':
      value = 'ATK';
      break;

    case 'defense':
      value = 'DEF';
      break;

    case 'special-attack':
      value = 'SATK';
      break;

    case 'special-defense':
      value = 'SDEF';
      break;

    case 'speed':
      value = 'SPD';
      break;
  }

  return value;
}

export function bgColor(className: string) {
  let color = '';
  switch (className) {
    case 'normal':
      color = 'bg-normal';
      break;
    case 'fighting':
      color = 'bg-fighting';
      break;
    case 'flying':
      color = 'bg-flying';
      break;
    case 'ground':
      color = 'bg-ground';
      break;
    case 'poison':
      color = 'bg-poison';
      break;
    case 'rock':
      color = 'bg-rock';
      break;
    case 'bug':
      color = 'bg-bug';
      break;
    case 'ghost':
      color = 'bg-ghost';
      break;
    case 'steel':
      color = 'bg-steel';
      break;
    case 'fire':
      color = 'bg-fire';
      break;
    case 'water':
      color = 'bg-water';
      break;
    case 'grass':
      color = 'bg-grass';
      break;
    case 'electric':
      color = 'bg-electric';
      break;
    case 'psychic':
      color = 'bg-psychic';
      break;
    case 'ice':
      color = 'bg-ice';
      break;
    case 'dragon':
      color = 'bg-dragon';
      break;
    case 'dark':
      color = 'bg-dark';
      break;
    case 'fairy':
      color = 'bg-fairy';
      break;
  }
  return color;
}

export function textColor(className: string) {
  let color = '';
  switch (className) {
    case 'normal':
      color = 'text-normal';
      break;
    case 'fighting':
      color = 'text-fighting';
      break;
    case 'flying':
      color = 'text-flying';
      break;
    case 'ground':
      color = 'text-ground';
      break;
    case 'poison':
      color = 'text-poison';
      break;
    case 'rock':
      color = 'text-rock';
      break;
    case 'bug':
      color = 'text-bug';
      break;
    case 'ghost':
      color = 'text-ghost';
      break;
    case 'steel':
      color = 'text-steel';
      break;
    case 'fire':
      color = 'text-fire';
      break;
    case 'water':
      color = 'text-water';
      break;
    case 'grass':
      color = 'text-grass';
      break;
    case 'electric':
      color = 'text-electric';
      break;
    case 'psychic':
      color = 'text-psychic';
      break;
    case 'ice':
      color = 'text-ice';
      break;
    case 'dragon':
      color = 'text-dragon';
      break;
    case 'dark':
      color = 'text-dark';
      break;
    case 'fairy':
      color = 'text-fairy';
      break;
  }
  return color;
}
