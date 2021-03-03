import React from "react";

function FilterGraph(props) {

  return (
    <div className="filter-buttons">
      <form>
        <button className="filter-button" value="fun" onClick={e => props.handleFilterButtonChange(e)}>Only show fun rating</button>
        <button className="filter-button" value="difficulty"onClick={e => props.handleFilterButtonChange(e)}>Only show difficulty rating</button>
        <button className="filter-button" value="both"onClick={e => props.handleFilterButtonChange(e)}>Show all ratings</button>
      </form>
    </div>  
  )
};

export default FilterGraph