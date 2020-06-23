import { useState } from "react";

// Custom Hook para gestionar Local Storage
export function useLocalStorage(key, initialValue) {
  // Inicializar estado con el valor de initialValue o con el valor actual del item
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  // Función para guardar el localstorage.
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  // Regresa el valor actual del estado y la función para cambiar el valor.
  return [storedValue, setLocalStorage];
}
