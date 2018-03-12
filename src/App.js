import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount(){
    for (let numberPokemon = 1; numberPokemon <= 2; numberPokemon++) {   //cambiarlo por 25
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

    // for (let i = 0; i < this.state.pokemons.length; i++) {
    //    <p> {this.state.pokemons[i].name} </p>
    // }

    return (

      <div>

        <header className="header">
          <h1>Pokedex</h1>
        </header>

        <main>

          <input type="text" className="namePokemon" value="" placeholder=" Insert a name"/>

          <ul>

            {this.state.pokemons.map((pokemon, index) => {
              return (
                <li className="" key= {index}>
                  <div className="">
                    <img className="" src={pokemon.sprites.front_default} alt=""/>
                  </div>
                  <div className="">
                    <p className=""> {pokemon.id} </p>
                    <h2 className=""> {pokemon.name} </h2>
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
