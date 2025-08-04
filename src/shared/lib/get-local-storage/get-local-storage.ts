export const getLocalStorage = <T>(storageName: string, defaultValue: T) => {
  const storage = localStorage.getItem(storageName);
  return storage !== null ? JSON.parse(storage) : defaultValue;
};
