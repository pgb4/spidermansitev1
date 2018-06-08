import React from 'react';

const SearchBox = ({onSearchChange, searchfield}) => {
  return (
    <div>
      <input
        className = "ma4"
        type="search"
        placeholder = "Search Villains"
        onChange = {onSearchChange}
      />
    </div>
  )
}

export default SearchBox
