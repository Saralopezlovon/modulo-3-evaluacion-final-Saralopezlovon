import React from "react";
import "../stylesheets/filters.scss";
import PropTypes from "prop-types";

function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };

  const onSubmit = ev => {
    ev.preventDefault();
  };

  const handleFilter = ev => {
    const specieSelected = ev.target.value;
    props.handleFilter({ value: specieSelected });
  };

  const handleFilterGender = ev => {
    const gender = ev.target.value;
    props.handleFilterGender({ value: gender });
  };

  return (
    <form className="input-container" onSubmit={onSubmit}>
      <input className="input" type="text" onChange={handleSearch} value={props.value} />
      <br></br>
      <br></br>
      <br></br>
      <div className="container-radios">
        <label className="label" htmlFor="Human">
          Human
          <input name="species" value="Human" id="Human" type="radio" onChange={handleFilter} checked={props.specieSelected === "Human"} />
        </label>
        <label className="label" htmlFor="Alien">
          Alien
          <input name="species" value="Alien" id="Alien" type="radio" onChange={handleFilter} checked={props.specieSelected === "Alien"} />
        </label>
        <label className="label" htmlFor="All">
          All
          <input name="species" value="" id="All" type="radio" onChange={handleFilter} checked={props.specieSelected === ""} />
        </label>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <select defaultValue="" onChange={handleFilterGender} id="gender" name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
          <option value="">All</option>
        </select>
      </div>
    </form>
  );
}

Filters.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string
};

export default Filters;
