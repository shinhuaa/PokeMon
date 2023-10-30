import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard({ url, name }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokeDetailData();
  }, []);

  async function fetchPokeDetailData() {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      const pokemonData = formatPokeData(response.data);
      setPokemon(pokemonData);
    } catch (error) {
      console.error(error);
    }
  }

  function formatPokeData(params) {
    const { id, types, name } = params;
    const PokeData = {
      id,
      name,
      type: types[0].type.name,
    };
    return PokeData;
  }

  console.log(pokemon);
  const bg = `bg-${pokemon?.type}`;
  const border = `border-${pokemon?.type}`;
  const text = `text-${pokemon?.type}`;
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;
  return (
    <div>
      <img src={img} />
    </div>
  );
}

export default PokeCard;
