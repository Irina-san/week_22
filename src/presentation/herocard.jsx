import React from "react";


const HeroCard = ({ hero, onRatingChange }) => {
    const handleRatingChange = event => {
      const newRating = parseInt(event.target.value);
      onRatingChange(hero.id, newRating);
    };
  
    return (
      <div>
        <img src={hero.imageUrl} alt={hero.name} />
        <h2>{hero.name}</h2>
        <p>{hero.description}</p>
        <input type="range" min="0" max="10" value={hero.rating} onChange={handleRatingChange} />
        <p>Оценка: {hero.rating}</p>
      </div>
    );
  };

  export { HeroCard };