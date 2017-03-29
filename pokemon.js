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

var pokemons=[];

function crearPokemon() {
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
    
    
    var pokemon = new Pokemon(nombrePokemon.value, 
                              colorPokemon.value, 
                              parseInt(puntosAtaque.value));
    pokemons.push(pokemon);                         
    console.log(pokemons);
    mostrarPokemon();
    nombrePokemon.value = " ";
    colorPokemon.value = " ";
    puntosAtaque.value = " ";
}

function mostrarPokemon() {
    var listaPokemones = document.getElementById("listaPokemones");
    var listaContrincantes = document.getElementById("listaContrincante");
    var opciones = document.createElement("select");
    var opcionesContrincantes = document.createElement("select");
    var elemento = document.createElement("option");
    var elementoContrincante = document.createElement("option");
   pokemons.forEach(function(pokemon) {
    elemento.innerText = pokemon.nombre + " " + pokemon.color + " " + pokemon.puntosAtaque;
    elementoContrincante.innerHTML = pokemon.nombre + " " + pokemon.color + " " + pokemon.puntosAtaque;
    listaPokemones.appendChild(elemento);
    listaContrincantes.appendChild(elementoContrincante);
    });
    
    
}



