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

function crearPokemon(){
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosAtaque");
    var pokemon = new Pokemon(nombrePokemon.value,
                              colorPokemon.value,
                              puntosAtaque.value,)
}