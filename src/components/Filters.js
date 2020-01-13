import React from "react";

function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };

  return (
    <form>
      <input type="text" onChange={handleSearch} />
    </form>
  );
}

export default Filters;
