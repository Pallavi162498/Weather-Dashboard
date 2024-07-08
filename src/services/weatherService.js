export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY }`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${cnt}&appid=${process.env.REACT_APP_API_KEY}`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
