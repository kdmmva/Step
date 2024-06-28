import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import sunImage from './images/sun.png';
import moonImage from './images/moon.png';
import heartIcon from './images/heart-red.png'; 

const Weather = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false); 

  const API_KEY = 'b78cc6c3f90311d505e7e2ff69635ff9';

  useEffect(() => {
    const savedCity = localStorage.getItem('city');
    const savedCountry = localStorage.getItem('country');
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (savedCity) setCity(savedCity);
    if (savedCountry) setCountry(savedCountry);
    if (savedFavorites.length > 0) setFavorites(savedFavorites);

    if (savedCity && savedCountry) {
      fetchWeatherData(savedCity, savedCountry);
    }
  }, []);

  const fetchWeatherData = async (cityName = city, countryCode = country) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${API_KEY}&units=metric`
      );

      const weatherDataWithTimes = { ...response.data };
      setWeatherData(weatherDataWithTimes);
      setError(null);

      const currentTime = new Date(response.data.dt * 1000).getHours();
      const sunriseTime = new Date(response.data.sys.sunrise * 1000).getHours();
      const sunsetTime = new Date(response.data.sys.sunset * 1000).getHours();

      if (currentTime >= sunriseTime && currentTime < sunsetTime) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    } catch (error) {
      setWeatherData(null);
      setError('City not found! Please enter a valid city name and country code.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  };

  const handleFavoriteClick = (favCity, favCountry) => {
    setCity(favCity);
    setCountry(favCountry);
    fetchWeatherData(favCity, favCountry);
    closeFavorites();
  };

  const addToFavorites = () => {
    if (!favorites.find(fav => fav.city === city && fav.country === country)) {
      const newFavorite = { city, country };
      setFavorites([...favorites, newFavorite]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, newFavorite]));
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  const renderImage = () => {
    const currentTime = Math.floor(Date.now() / 1000);
    if (weatherData) {
      const sunriseTime = weatherData.sys.sunrise;
      const sunsetTime = weatherData.sys.sunset;
      if (currentTime > sunriseTime && currentTime < sunsetTime) {
        return 'sun';
      } else {
        return 'moon';
      }
    }
    return null;
  };

  useEffect(() => {
    if (weatherData) {
      if (renderImage() === 'sun') {
        setTheme('light');
      } else if (renderImage() === 'moon') {
        setTheme('dark');
      }
    }
  }, [weatherData]);

  const openFavorites = () => {
    setIsFavoritesOpen(true);
  };

  const closeFavorites = () => {
    setIsFavoritesOpen(false);
  };

  return (
    <div className={`weather-app ${theme}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter country code (e.g., US)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Get Weather</button>
        <button class="favorite-btn" type="button" onClick={addToFavorites}>
          <img src={heartIcon} alt="Add to Favorites" />
        </button>
        <button type="button" onClick={openFavorites}>
          Open Favorites
        </button>
      </form>

      {weatherData && (
        <div className="weather-info">
          <h3>
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
          <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
          {renderImage() === 'sun' && <img src={sunImage} alt="Sun" className="weather-image" />}
          {renderImage() === 'moon' && <img src={moonImage} alt="Moon" className="weather-image" />}
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {/*меню избранных */}
      <div className={`favorites-menu ${isFavoritesOpen ? 'active' : ''}`}>
        <div className="favorites-container">
          <h3>Favorites</h3>
          <div className={`close-btn ${theme}`} onClick={closeFavorites}>
          &#10005;
          </div>
          {favorites.length > 0 ? (
            <ul>
              {favorites.map((fav, index) => (
                <li key={index} className="favorites-item" onClick={() => handleFavoriteClick(fav.city, fav.country)}>
                  {fav.city}, {fav.country}
                </li>
              ))}
            </ul>
          ) : (
            <p>No favorite cities yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
