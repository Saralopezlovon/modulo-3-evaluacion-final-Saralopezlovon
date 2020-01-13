import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <li>
      <Link to={`/characters/${props.characters.id}`}>
        <img src={props.characters.image} alt={props.characters.name}></img>
        <h2>{props.characters.name}</h2>
        <h2>{props.characters.species}</h2>
      </Link>
    </li>
  );
}

export default CharacterCard;
