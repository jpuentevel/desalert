import { useState } from 'react';

const useLocalStorageUsuario = (keyUsuario, initialValueUsuario) => {
  const [storedValueUsuario, setStoredValueUsuario] = useState(() => {
    try {
      const itemUsuario = window.localStorage.getItem(keyUsuario);
      return itemUsuario ? JSON.parse(itemUsuario) : initialValueUsuario;
    } catch (error) {
      return initialValueUsuario
    }
  })

    const setValueUsuario = value => {
      try {
        setStoredValueUsuario(value)
        window.localStorage.setItem(keyUsuario, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    }

  return [storedValueUsuario, setValueUsuario];
}

export default useLocalStorage