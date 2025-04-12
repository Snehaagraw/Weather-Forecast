import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitySearch = ({ onSelectCity }) => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length >= 3) {
      axios
        .get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`, {
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_GEODB_API_KEY,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          },
        })
        .then((response) => {
          setCities(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
        });
    } else {
      setCities([]);
    }
  }, [query]);

  const handleSelect = (city) => {
    onSelectCity(city);
    setQuery(city);
    setCities([]); // Hide suggestions after selection
  };

  const handleSearchClick = () => {
    if (query) {
      onSelectCity(query); // Trigger weather fetch manually
    }
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
      />
      <button onClick={handleSearchClick} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {cities.length > 0 && (
        <ul>
          {cities.map((city) => (
            <li key={city.id} onClick={() => handleSelect(city.city)}>
              {city.city}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
