import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export { Filter };