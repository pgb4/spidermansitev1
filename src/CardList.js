import React from 'react';
import Card from './Card.js';

const CardList = ({ villains }) => {
  return (
    <div>
      {
        villains.map(villain => {
          return (
            <Card
              key = {villain.id}
              id = {villain.id}
              name = {villain.name}
              alias = {villain.alias}
              imgSrc = {villain.imgSrc}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;
