import React from 'react';
import MagnifyingGlass from '../../assets/icon-search.svg';
import './Searchbar.css';

export default function Searchbar({ searchQuery, querySearchTerm }) {
  return (
    <div className='searchbar'>
      <img
        src={MagnifyingGlass}
        alt='Magnifying glass representing search'
        className='searchbar__icon'
      />
      <div>
        <input
          type='text'
          className='searchbar__input'
          placeholder='Search for movies or TV series'
          value={searchQuery}
          onChange={(e) => querySearchTerm(e)}
        />
      </div>
    </div>
  );
}
