
const pokemonList = [
    {
name: "bulbasaur",
imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
name: "mew",
    },
];

function PokemonCard(){
    const pokemon = pokemonList[0]

    return (   
        <div>
            <figure>
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            </figure>
            <figcaption>{pokemon.name}</figcaption>
        </div>
    )
}

export default PokemonCard;