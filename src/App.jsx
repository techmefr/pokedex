import React, { useState } from "react";
import PokemonCard from "./component/PokemonCard";
import PropTypes from "prop-types";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const goToPreviousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const goToNextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        {pokemonIndex > 0 && (
          <button onClick={goToPreviousPokemon}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={goToNextPokemon}>Suivant</button>
        )}
      </div>
    </div>
  );
}

App.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    imgSrc: PropTypes.string,
  }),
};

export default App;
