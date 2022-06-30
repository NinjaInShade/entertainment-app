import React, { useState } from 'react';
import MagnifyingGlass from '../../assets/icon-search.svg';
import './Searchbar.css';

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const querySearchTerm = (e) => {
    setSearchQuery(e.target.value);

    console.log(e.target.value);
  };

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
