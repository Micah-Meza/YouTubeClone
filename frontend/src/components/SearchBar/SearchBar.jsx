import React, { useState } from "react";


const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState();

    const handleChange = (event) => {
      event.preventDefault();
      props.getVideoDetails(searchInput);
    };
    


  return (
    <form onSubmit={handleChange}>
      <div>
        <input type="text" value={searchInput}  onChange={(event) => searchInput(event.target.value)} />
        <button className="button_type" type="submit" placeholder="Search here">Search</button>

      </div>
    </form>
  );
}
 
export default SearchBar;