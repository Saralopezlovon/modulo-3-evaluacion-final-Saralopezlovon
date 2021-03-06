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

  return (
    <form className="input-container" onSubmit={onSubmit}>
      <input className="input" type="text" onChange={handleSearch} value={props.value} />
    </form>
  );
}

Filters.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string
};

export default Filters;
