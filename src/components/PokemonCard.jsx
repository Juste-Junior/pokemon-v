

function PokemonCard() {
    
    
    const pokemonList = [
        {
          name: "bulbasaur",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];

      // on cree une variable const du premier pokemon si l'on vet afficher le 2° pokemon
   
      const pokemon  = pokemonList [0]; // premier du tableau
       // Si on veut afficher le deuxième pokémon :
       // const pokemon = pokemonList[1];
         
      return (
        <div>
        <figure>
          {pokemon.imgSrc ?
            <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
      )
      
      
  
}
export default PokemonCard;