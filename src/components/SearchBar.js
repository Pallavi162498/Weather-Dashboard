// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <TextField
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      label="Search for a city"
      variant="outlined"
    />
  );
};

export default SearchBar;
