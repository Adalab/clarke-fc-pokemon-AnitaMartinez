import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount(){
    for (let numberPokemon = 1; numberPokemon < 10; numberPokemon++) {   //cambiarlo por 25
      fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}/`)
      .then(response => response.json())
      .then(results => {
        let listPokemons = this.state.pokemons;
        listPokemons.push(results)
        this.setState({
          pokemons: listPokemons
        });
      })
    }
  }

  render() {

    return (

      <div>

        <header className="header">
          <h1 className="tittle-lg"> Pokedex </h1>
        </header>

        <main>

          <div className="align-center">
            <input className="inputByName" type="text" value="" placeholder=" Insert a name"/>
          </div>

          <ul className="wrapper-grid">
            {this.state.pokemons.map((pokemon, index) => {
              return (
                <li className="card" key= {index}>
                  <div className="container-image">
                    <img className="" src={pokemon.sprites.front_default} alt=""/>
                  </div>
                  <div className="text-card">
                    <p className="id"> {pokemon.id} </p>
                    <h2 className="tittle-pokemon"> {pokemon.name} </h2>
                    <div className="">
                      <p> {pokemon.types[0].type.name} </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

        </main>

      </div>
    );
  }
}

export default App;
