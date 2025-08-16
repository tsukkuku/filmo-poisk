export const goToActors = () => {
  const el = document.getElementById("actors");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};
