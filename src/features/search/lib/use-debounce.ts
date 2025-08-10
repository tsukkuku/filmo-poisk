import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 500) => {
  const [debouncedValue, setIsDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsDebouncedValue(value.trim());
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
};
