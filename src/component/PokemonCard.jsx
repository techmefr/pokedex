import React from "react";
import PropTypes from "prop-types";

function PokemonCard(props) {
  const { pokemon, pokemonIndex } = props;

  if (!pokemon || !pokemon.name) {
    return (
      <div>
        <figure>
          <img src="???" alt="???" />
        </figure>
        <figcaption>???</figcaption>
      </div>
    );
  }

  const { name, imgSrc } = pokemon;

  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <img src="???" alt="???" />}
      </figure>
      <figcaption>{name}</figcaption>
      <p>Pokemon Index: {pokemonIndex}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    imgSrc: PropTypes.string,
  }),
  pokemonIndex: PropTypes.number.isRequired,
};

export default PokemonCard;
