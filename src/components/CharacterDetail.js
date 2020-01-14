import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/characterDetail.scss";

function CharacterDetail(props) {
  return (
    <div className="detail-container">
      <div className="link-container">
        <Link className="link" to="/">
          Volver
        </Link>
      </div>

      <div className="card">
        <img className="card-image" src={props.character.image} alt={props.character.name} />
        <ul className="card-description-container">
          <li className="card-description_name">{props.character.name}</li>
          <li className="card-description">Status: {props.character.status}</li>
          <li className="card-description">Species: {props.character.species}</li>
          <li className="card-description">Origin: {props.character.origin.name}</li>
          <li className="card-description">Episodes: {props.character.episode.length}</li>
        </ul>
      </div>
    </div>
  );
}
export default CharacterDetail;
