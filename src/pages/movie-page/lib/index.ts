export const declineRatings = (count: number) => {
  const lastTwo = count % 100;
  const lastOne = count % 10;

  if (lastTwo >= 11 && lastTwo <= 19) {
    return `${count.toLocaleString()} оценок`;
  }

  switch (lastOne) {
    case 1:
      return `${count.toLocaleString()} оценка`;
    case 2:
    case 3:
    case 4:
      return `${count.toLocaleString()} оценки`;
    default:
      return `${count.toLocaleString()} оценок`;
  }
};

export const declineSeasons = (season: number) => {
  const lastTwo = season % 100;
  const lastOne = season % 10;

  if (lastTwo >= 11 && lastTwo <= 19) {
    return `${season.toLocaleString()} сезонов`;
  }

  switch (lastOne) {
    case 1:
      return `${season.toLocaleString()} сезон`;
    case 2:
    case 3:
    case 4:
      return `${season.toLocaleString()} сезона`;
    default:
      return `${season.toLocaleString()} сезонов`;
  }
};

export const ageLimit = (ageLimit: string) => {
  switch (ageLimit) {
    case "age0":
      return "0+";
    case "age6":
      return "6+";
    case "age12":
      return "12+";
    case "age16":
      return "16+";
    default:
      return "18+";
  }
};

export const mpaaLimit = (mpaa: string) => {
  switch (mpaa) {
    case "g":
      return "G (нет возрастных ограничений)";
    case "pg":
      return "PG (рекомендуется присутствие родителей)";
    case "pg13":
      return "PG-13 (детям до 13 лет просмотр не желателен)";
    case "r":
      return "R (лицам до 17 лет обязательно присутствие взрослого)";
    default:
      return "NC-17 (лицам до 17 лет обязательно присутствие взрослого)";
  }
};
