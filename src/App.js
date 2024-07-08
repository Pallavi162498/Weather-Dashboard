import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import ForecastWeather from './components/ForecastWeather';
import { Container, Typography, TextField, Button, CircularProgress, Box } from '@mui/material';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [inputCity, setInputCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State for storing temperature chart data
  const [temperatureData, setTemperatureData] = useState([]);
  const [labels, setLabels] = useState([]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError('');
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: process.env.REACT_APP_API_KEY,
          units: 'metric',
        },
      });

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: city,
          appid: process.env.REACT_APP_API_KEY,
          units: 'metric',
        },
      });

      setWeatherData(weatherResponse.data);

      const processedForecastData = forecastResponse.data.list.map(item => ({
        date: item.dt_txt,
        condition: item.weather[0].description,
        avgTemp: item.main.temp,
        precipitation: item.rain ? item.rain['3h'] : 0,
      }));
      setForecastData(processedForecastData);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = () => {
    if (inputCity) {
      setCity(inputCity);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <TextField
          label="City"
          variant="outlined"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          style={{ marginBottom: '1rem' }}
          InputProps={{
            style: { color: 'white' }, // Change the input text color to white
          }}
          InputLabelProps={{
            style: { color: 'white' }, // Change the label color to white
          }}
          sx={{
            '& fieldset': {
              borderColor: 'white', // Change the outline color to white
            },
          }}
        />
        <Button variant="contained" color="primary" onClick={handleCityChange}>
          Get Weather
        </Button>
      </Box>
      {loading && <CircularProgress style={{ margin: '1rem 0' }} />}
      {error && <Typography color="error">{error}</Typography>}
      {weatherData && (
        <Box mt={4}>
          <WeatherCard weather={weatherData} style={{ backgroundColor: '#BBE9FF', color: 'black' }} />
          <Typography variant="h4" gutterBottom style={{ marginTop: '2rem', color: 'white' }}>
            7-Day Forecast
          </Typography>
          {forecastData && <ForecastWeather forecast={forecastData} />}
        </Box>
      )}
    </Container>
  );
};

export default App;
