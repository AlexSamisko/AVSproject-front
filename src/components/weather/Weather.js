import { useEffect, useState } from 'react';
import fetchWeather from './fetchWeather';
import styles from './Weather.module.css';

function Weather() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeather(setCurrentWeather, setError, setIsLoading);
  }, []);

  return (
    <div className={styles.weather}>
      {isLoading && <p>Loading...</p>}
      {error && <p> {error} </p>}
      {currentWeather && (
        <p>{`Temperature: ${currentWeather.temperature}, Wind speed: ${currentWeather.windSpeed} `}</p>
      )}
    </div>
  );
}

export default Weather;
