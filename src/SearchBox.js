import React from 'react';

const SearchBox = ({onSearchChange, searchfield, route}) => {
  return (
    <div>
      <input
        className = "ma4"
        type="search"
        placeholder = {`Search ${route}`}
        onChange = {onSearchChange}
      />
    </div>
  )
}

export default SearchBox
