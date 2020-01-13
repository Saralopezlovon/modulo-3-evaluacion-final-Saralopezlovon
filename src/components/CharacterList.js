import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/characterList.scss";

const CharacterList = props => {
  console.log(props.characters);
  return (
    <div className="characters-container">
      {props.characters.map(character => {
        return <CharacterCard key={character.id} characters={character} />;
      })}
    </div>
  );
};

export default CharacterList;
