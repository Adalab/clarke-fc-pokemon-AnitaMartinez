import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {


  render() {

    function sendRequest() {
      axios.get(apiUrl)
      .then( function (response) {
        console.log(response);
        console.log("Este es el nombre: ", response.data.forms[0].name);
        console.log("Esta es la imagen: ", response.data.sprites.front_default);
        console.log("Este es el tipo: ", response.data.types[0].type.name);
        console.log("Este es el número: ", response.data.id);
      })
    }

    let i;
    let numberPokemon = 1;
    let apiUrl;


    for (i = 0; i <= 25; i++) {
      apiUrl = "https://pokeapi.co/api/v2/pokemon/" + numberPokemon + "/";
      numberPokemon = numberPokemon + 1;
      sendRequest();
    }

    return (
      <p>Hola</p>
    );
  }
}

export default App;
