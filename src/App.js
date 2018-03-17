import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      valueInput: "",
    }
  }

  componentDidMount(){
    let listPokemons = this.state.pokemons;
    for (let numberPokemon = 1; numberPokemon <= 5; numberPokemon++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}/`)
      .then(response => response.json())
      .then(pokemonDetails => {
        fetch(pokemonDetails.species.url)
        .then(response => response.json())
        .then((evolution)=> {
          if (evolution.evolves_from_species) {
            pokemonDetails.evolutionName = evolution.evolves_from_species.name;
          }
          listPokemons.push(pokemonDetails);
          this.setState({
            pokemons: listPokemons
          });
        });
      })
    }
  }

  handleInput = event => {
    this.setState({valueInput: event.target.value});
  }

  render() {

    const filterByInputValue = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.state.valueInput.toLowerCase());
    });

    return (

      <div>

        <header className="header">
          <h1 className="tittle-lg"> Pokedex </h1>
        </header>

        <main>

          <div className="align-center">
            <input className="inputByName" onChange={this.handleInput} value={this.state.valueInput} type="text" placeholder=" Insert a name"/>
          </div>

          <ul className="wrapper-grid">
            {filterByInputValue.map((pokemon, index) => {
              return (
                <li className="card" key= {index}>
                  <div className="container-image">
                    <img className="" src={pokemon.sprites.front_default} alt=""/>
                  </div>
                  <div className="text-card">
                    <p className="id"> {pokemon.id} </p>
                    <h2 className="tittle-pokemon"> {pokemon.name} </h2>
                    <h2> Viene de: {pokemon.evolutionName} </h2>
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
