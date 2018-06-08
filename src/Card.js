import React from 'react';
import './Card.css'

const Card = ({ id, name, alias, imgSrc }) => {
  return (
    <section className = 'dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`${imgSrc}`} height="200px"  alt='one of the villains' />
      <div>
        <h3>{name}</h3>
        <p>{alias}</p>
      </div>
    </section>
  );
}


export default Card;
