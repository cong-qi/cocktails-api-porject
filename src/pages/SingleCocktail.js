import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const fetchSingleCocktail = React.useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get(`${url}${id}`);
    if (data.drinks) {
      setCocktail(data.drinks[0]);
    } else {
      setCocktail(null);
    }
    setLoading(false);
  }, [id]);

  React.useEffect(() => {
    fetchSingleCocktail();
  }, [fetchSingleCocktail]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <section className="section">
        <h2 className="section-title">no cocktail to display</h2>
      </section>
    );
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{cocktail.strDrink}</h2>
      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {cocktail.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {cocktail.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            <span>{cocktail.strIngredient1}</span>
            <span>{cocktail.strIngredient2}</span>
            <span>{cocktail.strIngredient3}</span>
            <span>{cocktail.strIngredient4}</span>
            <span>{cocktail.strIngredient5}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
