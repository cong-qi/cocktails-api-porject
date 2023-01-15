import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    const { data } = await axios.get(`${url}${searchTerm}`);

    if (data.drinks) {
      setCocktails(data.drinks);
    } else {
      setCocktails([]);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
