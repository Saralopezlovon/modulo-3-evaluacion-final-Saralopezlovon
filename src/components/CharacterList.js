import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/characterList.scss";
import PropTypes from "prop-types";

const CharacterList = props => {
  return (
    <div className="characters-container">
      {props.characters.map(character => {
        return <CharacterCard key={character.id} characters={character} />;
      })}
    </div>
  );
};

CharacterList.propTypes = {
  id: PropTypes.number,
  character: PropTypes.string
};

export default CharacterList;
