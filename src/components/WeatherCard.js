import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SnowIcon from '@mui/icons-material/AcUnit';
import FogIcon from '@mui/icons-material/BlurOn';

const iconMap = {
  clear: <WbSunnyIcon style={{ color: 'yellow', fontSize: 50 }} />,
  clouds: <CloudIcon style={{ color: 'gray', fontSize: 50 }} />,
  rain: <OpacityIcon style={{ color: 'blue', fontSize: 50 }} />,
  thunderstorm: <ThunderstormIcon style={{ color: 'purple', fontSize: 50 }} />,
  snow: <SnowIcon style={{ color: 'lightblue', fontSize: 50 }} />,
  fog: <FogIcon style={{ color: 'gray', fontSize: 50 }} />,
};

const getIcon = (condition) => {
  if (condition.includes('clear')) return iconMap.clear;
  if (condition.includes('clouds')) return iconMap.clouds;
  if (condition.includes('rain')) return iconMap.rain;
  if (condition.includes('thunderstorm')) return iconMap.thunderstorm;
  if (condition.includes('snow')) return iconMap.snow;
  if (condition.includes('fog') || condition.includes('mist') || condition.includes('haze')) return iconMap.fog;
  return <CloudIcon style={{ color: 'gray', fontSize: 50 }} />;
};

const WeatherCard = ({ weather, style }) => (
  <Card style={{ display: 'inline-block', ...style }}>
    <CardContent style={{ display: 'flex', alignItems: 'center' }}>
      {getIcon(weather.weather[0].description.toLowerCase())}
      <div style={{ marginLeft: '1rem' }}>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography>Temperature: {weather.main.temp}°C</Typography>
        <Typography>Humidity: {weather.main.humidity}%</Typography>
        <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
        <Typography>Condition: {weather.weather[0].description}</Typography>
      </div>
    </CardContent>
  </Card>
);

export default WeatherCard;
