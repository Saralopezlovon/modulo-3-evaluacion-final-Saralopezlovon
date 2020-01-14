import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import Header from "./Header";
import Filters from "./Filters";
import apiCharacters from "../api/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchText: ""
    };
    this.renderDetailCharacter = this.renderDetailCharacter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filteredCharacters = this.filteredCharacters.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText.value });
  }

  componentDidMount() {
    apiCharacters().then(characters => {
      this.setState({ characters });
    });
  }

  renderDetailCharacter(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(character => character.id === routeId);
    if (character === undefined) {
      return <p>Personaje no encontrado en la lista</p>;
    } else {
      return <CharacterDetail character={character} />;
    }
  }

  filteredCharacters() {
    return this.state.characters.filter(character => {
      return character.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
  }

  render() {
    return (
      <div className="homepage-container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Filters handleSearch={this.handleSearch} value={this.state.searchText} />
            <CharacterList characters={this.filteredCharacters()} />
          </Route>

          <Route path="/characters/:id" render={this.renderDetailCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
