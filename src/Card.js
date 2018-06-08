import React from 'react';

const Card = ({ id, name, alias, imgSrc }) => {
  return (
    <div className = 'bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`${imgSrc}`} height="200px"  alt='one of the villains' />
      <div>
        <h3>{name}</h3>
        <p>{alias}</p>
      </div>
    </div>
  );
}


export default Card;
