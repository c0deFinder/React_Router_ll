import { createContext, useState } from "react";
import { useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`
    );
    const data = await response.json();
    setPokemons(data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <MyContext.Provider value={{ pokemons }}>{children}</MyContext.Provider>
  );
};