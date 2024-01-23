import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, CardImg, CardTitle, Button, CardBody } from "react-bootstrap";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/pokemon");
  }

  useEffect(() => {
    if (!name) return;

    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error(`Error fetching Pokemon data: ${response.status}`);
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
        // Manejar errores aquí (puedes mostrar un mensaje de error al usuario
      }
    };

    getPokemon();
  }, [name]);

  return (
    <div>
      <Card className="cardList">
        <CardTitle className="NameTittle">{pokemon?.name}</CardTitle>
        <CardImg src={pokemon?.sprites?.front_default} alt=""  style={{ height: "22rem" }} className="cardImg" />
        <CardBody >
          <ul className="orderList" >
            <li>Altura: {pokemon?.height}</li>
            <li>Peso: {pokemon?.weight}</li>
            <li>Tipo: {pokemon?.types?.[0]?.type?.name}</li>
            <li>Elemento: {pokemon?.types?.[1]?.type?.name}</li>
            <li>HP: {pokemon?.stats?.[0]?.base_stat}</li>
            <li>Ataque: {pokemon?.stats?.[1]?.base_stat}</li>
            <li>Defensa: {pokemon?.stats?.[2]?.base_stat}</li>
            <li>Abilidad 1: {pokemon?.abilities?.[0]?.ability?.name}</li>
            <li>Abilidad 2: {pokemon?.abilities?.[1]?.ability?.name}</li>
          </ul>
        </CardBody>
        <Button className="button" onClick={goBack}>Volver</Button>
      </Card>
    </div>
  );
};

export default PokemonDetails;
