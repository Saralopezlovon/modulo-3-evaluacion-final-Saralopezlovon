import React from "react";
import "../stylesheets/filters.scss";

function Filters(props) {
  console.log(props.value);
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };

  return (
    <form className="input-container">
      <input className="input" type="text" onChange={handleSearch} value={props.value} />
    </form>
  );
}

export default Filters;
