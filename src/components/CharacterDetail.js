import React from "react";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <div className="card">
      <Link to="/">Volver</Link>
      <img src={props.character.image} alt={props.character.name} />
      <h3>Status: {props.character.status}</h3>
      <h3>Species: {props.character.species}</h3>
      <h3>Origin: {props.character.origin.name}</h3>
      <h3>Episodes: {props.character.episode.length}</h3>
    </div>
  );
}
export default CharacterDetail;
