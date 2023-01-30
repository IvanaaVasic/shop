import { useState, useEffect } from "react";

function getStorageValue(key: any, defaultValue: any) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

export const useLocalStorage = (key: any, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
  }, [key, value]);

  return [value, setValue];
};
