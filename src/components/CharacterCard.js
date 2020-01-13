import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/characterCard.scss";

function CharacterCard(props) {
  return (
    <li className="list-characters">
      <Link to={`/characters/${props.characters.id}`}>
        <img className="image" src={props.characters.image} alt={props.characters.name}></img>
        <ul className="description-container">
          <li className="description-title_name">{props.characters.name}</li>
          <li className="description-title_species">{props.characters.species}</li>
        </ul>
      </Link>
    </li>
  );
}

export default CharacterCard;
