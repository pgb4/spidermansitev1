import React from 'react';

const SearchBox = ({onSearchChange, searchfield}) => {
  return (
    <div>
      <input
        type="search"
        placeholder = "Search Villains"
        onChange = {onSearchChange}
      />
    </div>
  )
}

export default SearchBox
