import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SnowIcon from '@mui/icons-material/AcUnit';
import FogIcon from '@mui/icons-material/BlurOn';

const iconMap = {
  clear: <WbSunnyIcon style={{ color: 'yellow' }} />,
  clouds: <CloudIcon style={{ color: 'gray' }} />,
  rain: <OpacityIcon style={{ color: 'blue' }} />,
  thunderstorm: <ThunderstormIcon style={{ color: 'purple' }} />,
  snow: <SnowIcon style={{ color: 'lightblue' }} />,
  fog: <FogIcon style={{ color: 'gray' }} />,
};

const getIcon = (condition) => {
  console.log('Condition:', condition); // Debugging line
  if (condition.includes('clear')) return iconMap.clear;
  if (condition.includes('clouds')) return iconMap.clouds;
  if (condition.includes('rain')) return iconMap.rain;
  if (condition.includes('thunderstorm')) return iconMap.thunderstorm;
  if (condition.includes('snow')) return iconMap.snow;
  if (condition.includes('fog') || condition.includes('mist') || condition.includes('haze')) return iconMap.fog;
  return <CloudIcon style={{ color: 'gray' }} />;
};

const ForecastWeather = ({ forecast }) => {
  return (
    <Grid container spacing={2}>
      {forecast.map((day, index) => (
        <Grid item xs={6} sm={4} md={2} key={index}> {/* Adjusted xs, sm, and md sizes */}
          <Card style={{ height: '100%', background:'#1A2130', color: 'white' }}> {/* Added style to control height */}
            <CardContent>
              <Typography variant="h6" style={{ color: 'white', marginBottom: '0.5rem' }}>{day.date}</Typography>
              {getIcon(day.condition.toLowerCase())}
              <Typography variant="body1">
                {day.avgTemp}°C
              </Typography>
              <Typography variant="body2">
                {day.condition}
              </Typography>
              <Typography variant="body2">
                Precipitation: {day.precipitation} mm
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ForecastWeather;
