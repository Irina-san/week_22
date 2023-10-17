import React, { useState } from 'react';
import { HeroCard } from './presentation/herocard';
import { data } from './presentation/data/data'; 


const HeroGallery = () => {
  const [heroes, setHeroes] = useState(data);

  const handleRatingChange = (heroName, rating) => {
    // Обновление оценки героя
    const updatedHeroes = heroes.map(hero => {
      if (hero.name === heroName) {
        return { ...hero, rating };
      }
      return hero;
    });

    setHeroes(updatedHeroes);
  };

  return (
    <div className="hero-gallery">
      {heroes.map(hero => (
        <HeroCard
          key={hero.name}
          hero={hero}
          onRatingChange={handleRatingChange}
        />
      ))}
    </div>
  );
};

export default HeroGallery;