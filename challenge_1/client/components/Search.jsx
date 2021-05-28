import React, { useState } from 'react';


const Search = ({ search }) => {
  const [searchString, setSearch] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    search(searchString);
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={(e) => submitSearch(e)} >
        <label>
          <input type="text" name="search" value={searchString} onChange={(e) => setSearch(e.target.value)} />
        </label>

        <input type="submit" value="search"/>
      </form>
    </div>
  );
}

export default Search;