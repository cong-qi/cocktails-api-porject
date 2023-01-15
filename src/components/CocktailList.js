import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length === 0) {
    return (
      <section className="section">
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </section>
    );
  }

  const renderedCocktails = cocktails.map((cocktail) => {
    return <Cocktail key={cocktail.idDrink} cocktail={cocktail} />;
  });

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">{renderedCocktails}</div>
    </section>
  );
};

export default CocktailList;
