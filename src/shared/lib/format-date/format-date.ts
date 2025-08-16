export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const userLocation = navigator.language;

  return newDate.toLocaleDateString(userLocation, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
