import React from 'react';
import Card from './Card.js';

const CardList = ({ villains, allies, route }) => {
  if(route==='nemeses') {
    return (
      <div> {
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
      </div>)
    } else {
        return (
          <div>
            {
              allies.map(ally => {
                return (
                  <Card
                    key = {ally.id}
                    id = {ally.id}
                    name = {ally.name}
                    alias = {ally.alias}
                    imgSrc = {ally.imgSrc}
                  />
                )
              })
            }
          </div>
        )
    }
  }




export default CardList;
