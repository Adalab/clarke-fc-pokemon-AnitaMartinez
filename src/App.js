import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  sendRequest() {
    for (let pokemonID = 1; pokemonID <= 2; pokemonID++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`)
      .then(response => {
        response.json();
      })
      .then(responseJSON => {
        const listPokemons = this.state.pokemons;
        listPokemons.push(responseJSON);
        this.setState({
          pokemons: listPokemons,
        })
      })
    }
  }

  componentDidMount() {
    this.sendRequest();
  }


  render() {

    return (

      <div>

        <header className="header">
          <h1>Pokedex</h1>
        </header>

        <main>

          <input type="text" className="namePokemon" value="" placeholder=" Insert a name"/>

          <ul>
            <li className="">
              <div className="">
                <img className="" src="" alt=""/>
              </div>
              <div className="">
                <p className=""> Nº 1 </p>
                <h2 className=""> Pikachu</h2>
                <div className="">
                  <p>Electricidad</p>
                </div>

              </div>
            </li>
          </ul>

        </main>

      </div>
    );
  }
}

export default App;
