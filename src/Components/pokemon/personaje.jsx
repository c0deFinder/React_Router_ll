import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../myContext/MyContext";

const Pokemon = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokemons } = useContext(MyContext);
  const navigate = useNavigate();

  const selectPokemon = (name) => {
    setSelectedPokemon(name);
  };

  const showDetail = async () => {
    if (!selectedPokemon) return;
    navigate(`/pokemon/${selectedPokemon}`);
  };

  return (
    <div className="container">
      <select className="select" onChange={({ target: { value } }) => selectPokemon(value)}>
        {pokemons.results?.map((pokemon) => (
          <option className="option" value={pokemon.name} key={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button className="btn-detail" onClick={showDetail}>Ver Aspectos</button>
    </div>
  );
};

export default Pokemon;
