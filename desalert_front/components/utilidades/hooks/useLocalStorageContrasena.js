import { useState } from 'react';

const useLocalStorageContrasena = (keyContrasena, initialValueContrasena) => {
  const [storedValueContrasena, setStoredValueContrasena] = useState(() => {
    try {
      const itemContrasena = window.localStorage.getItem(keyContrasena);
      return itemContrasena ? JSON.parse(itemContrasena) : initialValueContrasena;
    } catch (error) {
      return initialValueContrasena
    }
  })

    const setValueContrasena = value => {
      try {
        setStoredValueContrasena(value)
        window.localStorage.setItem(keyContrasena, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    }

  return [storedValueContrasena, setValueContrasena];
}

export default useLocalStorage