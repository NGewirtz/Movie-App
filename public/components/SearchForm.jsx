import React from 'react';

function SearchForm({handleSubmit, handleChange, value}) {
  return (
    <form>
      <input id="search-term"
        placeholder="Movie title"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default SearchForm;
