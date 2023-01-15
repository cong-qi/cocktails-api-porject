import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            value={searchTerm}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
