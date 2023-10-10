
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

function PokemonCard() {
    const pokemon = pokemonList[1];
    let altText = pokemon.name; // Par défaut, utilisez le nom du Pokémon
    if (pokemon.imgSrc === undefined || pokemon.imgSrc === null) {
        return (
            <div>
                <figure>
                    {pokemon.imgSrc ? (
                        <img src={pokemon.imgSrc} alt={pokemon.name} />
                    ) : ("???")}
                </figure>
                <figcaption>
                    {pokemon.name}
                </figcaption>
            </div>
        );
        }
    else {
    return (
        <div>
            <figure>
                <img src={pokemon.imgSrc} alt={altText} />
            </figure>
            <figcaption>{pokemon.name}</figcaption>
        </div>
    );
}
}

//function PokemonCard() {
//     const pokemon = pokemonList[1];
    // return ( 
//       <div>
//         <figure>
//           <img
//             src={pokemon.imgSrc || "???"} // Utilisation de l'opérateur ternaire ici
//             alt={pokemon.imgSrc ? pokemon.name : "???"} // Et ici
//           />
//         </figure>
//         <figcaption>{pokemon.name}</figcaption>
    //   </div>
 //     );
//   }
export default PokemonCard;

