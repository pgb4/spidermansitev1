import React from 'react';

const SearchBox = ({onSearchChange, searchfield, route}) => {
  let group='';
  if(route==='nemeses') {
    group='Villains'
  } else{
    group = 'Allies'
  }

  return (
    <div>
      <input
        className = "ma4"
        type="search"
        placeholder = {`Search ${group}`}
        onChange = {onSearchChange}
      />
    </div>
  )
}

export default SearchBox
