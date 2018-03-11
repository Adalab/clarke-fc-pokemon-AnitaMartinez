import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {


  render() {

    const apiUrl = "https://pokeapi.co/api/v2/pokemon/2/";

    axios.get(apiUrl)
    .then( function (response) {
      console.log(response);
      console.log("Este es el nombre: ", response.data.forms[0].name);
      console.log("Esta es la imagen: ", response.data.sprites.front_default);
      console.log("Este es el tipo: ", response.data.types[1].type.name);
      console.log("Este es el número: ", response.data.id);
    })


    // .catch(function (error) {
    //        pokemonName.innerHTML = "(An error has occurred.)";
    //        pokemonImage.src = "";
    //    });
    //

    return (
      <p>Hola</p>
    );
  }
}

export default App;
