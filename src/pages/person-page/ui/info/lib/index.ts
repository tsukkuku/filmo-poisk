export const getAgeWithWord = (age: number): string => {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${age} лет`;
  }

  switch (lastDigit) {
    case 1:
      return `${age} год`;
    case 2:
    case 3:
    case 4:
      return `${age} года`;
    default:
      return `${age} лет`;
  }
};

export const getChildrenCountWithWord = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} детей`;
  }

  switch (lastDigit) {
    case 1:
      return `${count} ребёнок`;
    case 2:
    case 3:
    case 4:
      return `${count} ребёнка`;
    default:
      return `${count} детей`;
  }
};
