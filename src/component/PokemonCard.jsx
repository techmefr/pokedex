import React from 'react';

function PokemonCard(props) {
    const { pokemon } = props;

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
        {imgSrc ? (
            <img src={imgSrc} alt={name} />
        ) : (
        <img src="???" alt="???" />
        )}
        </figure>
        <figcaption>{name}</figcaption>
    </div>
    );
}

export default PokemonCard;
