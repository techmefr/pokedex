
const pokemonList = [
    {
    name: "bulbasaur",
    imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
    name: "Bulbasaur",
    },
];

function PokemonCard(){
    return (   
        <div>
<figure>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="BulbaSaur"/>
</figure>
<figcaption>Bulbasaur</figcaption>
    
    </div>
)
}

export default PokemonCard;