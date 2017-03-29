function Pokemon(nombre, color, puntosAtaque){
    this.nombre = nombre;
    this.color = color;
    this.puntosAtaque = puntosAtaque;
    this.vida = 100;
    this.saludar = function(){
        console.log("Hola, me llamo " + this.nombre)
    };
    this.pelear = function(pokemonObjeto){
        pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
    }
}

var pokemons[];

function crearPokemon() {
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              parseInt(puntosAtaque.value,))
    pokemons.push(pokemon)
    mostrarPokemons();
}
console.log(pokemon);

function mostrarPokemons(){
    var listaPokemons = document.getElementById("listaPokemons");
    var lista = document.createElement("ul");
    
    pokemons.forEach(function(pokemon){
        var elemento = document.createElement("li");
        
        elemento.innerHTML=pokemon.nombre + pokemon.color + pokemon.puntosAtaque;
        lista.appendChild(elemento);
    })
    listaPokemons.appendChild(lista);
 /*   var strFinal="";
    
    pokemons.forEach(function(pokemon){
                     strFinal +=pokemon.nombre
                     strFinal +=pokemon.color
                     strFinal +=pokemon.puntosAtaque
                     })
    listaPokemons.innerHTML=strFinal;*/
}
