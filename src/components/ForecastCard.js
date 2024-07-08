// src/components/ForecastCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ForecastCard = ({ forecast }) => (
  <Card>
    <CardContent>
      {forecast.map((day, index) => (
        <div key={index}>
          <Typography>{new Date(day.dt * 1000).toLocaleDateString()}</Typography>
          <Typography>Temperature: {day.temp.day}°C</Typography>
          <Typography>Condition: {day.weather[0].description}</Typography>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ForecastCard;
