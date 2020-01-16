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
      searchText: "",
      specieSelected: "",
      gender: "",
      episodes: ""
    };

    this.renderDetailCharacter = this.renderDetailCharacter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFilterGender = this.handleFilterGender.bind(this);
    this.filteredCharacters = this.filteredCharacters.bind(this);
    this.handleSearch2 = this.handleSearch2.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText.value });
  }

  handleSearch2(episodes) {
    this.setState({ episodes: episodes.value });
  }

  handleFilter(specieSelected) {
    this.setState({ specieSelected: specieSelected.value });
  }

  handleFilterGender(gender) {
    this.setState({ gender: gender.value });
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
      return <p className="error">Personaje no encontrado en la lista</p>;
    } else {
      return <CharacterDetail character={character} />;
    }
  }

  filteredCharacters() {
    return this.state.characters
      .filter(character => {
        return character.name.toLowerCase().includes(this.state.searchText.toLowerCase());
      })
      .filter(character => {
        return character.species.toLowerCase().includes(this.state.specieSelected.toLowerCase());
      })
      .filter(character => {
        return character.gender.toLowerCase() === this.state.gender.toLowerCase() || this.state.gender === "";
      })

      .filter(character => {
        return character.episode.length === parseInt(this.state.episodes) || this.state.episodes === "";
      });
  }

  render() {
    console.log(this.state.specieSelected);
    return (
      <div className="homepage-container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Filters handleSearch={this.handleSearch} value={this.state.searchText} handleSearch2={this.handleSearch2} episodes={this.state.episodes} handleFilter={this.handleFilter} specieSelected={this.state.specieSelected} handleFilterGender={this.handleFilterGender} gender={this.state.gender} />
            <CharacterList characters={this.filteredCharacters()} />
          </Route>

          <Route path="/characters/:id" render={this.renderDetailCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
