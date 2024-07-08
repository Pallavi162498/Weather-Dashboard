# Weather-App

This project is a weather forecast dashboard built using React and Material-UI. It retrieves weather data from the OpenWeatherMap API and displays current weather information and a 7-day forecast for a specified city.
# Getting Started with Create React App
# Features
1. Current Weather: Displays current weather conditions including temperature, humidity, wind speed, and weather description.
2. 7-Day Forecast: Shows a forecast for the next 7 days with details such as average temperature, weather condition, and precipitation.
3. Temperature Chart (Future Implementation): Planned feature to chart the temperature trend over the forecast period using Chart.js.
# Technologies Used
This project utilizes several technologies and libraries:

1. React: A JavaScript library for building user interfaces.
2. Material-UI: A popular React UI framework for designing responsive and accessible components.
3. Axios: A promise-based HTTP client for making API requests.
4. Chart.js: A JavaScript library for data visualization, planned for implementing the temperature chart feature.
# Getting Started
To run this project locally, follow these steps:
- npm start
npx create-react-app weather-dashboard
cd weather-forecast-dashboard
- Install dependencies:
npm install
- Set up environment variables:
- Create a .env file in the root directory and add your OpenWeatherMap API key:
makefile
write: 
REACT_APP_API_KEY=your_api_key_here

- Start the development server:
npm start
- Open the application in your browser:

# Usage
- Enter a city name: Type the name of a city in the input field and click "Get Weather" to fetch weather data.
- View current weather: The dashboard displays current weather information including temperature, humidity, wind speed, and weather condition.
- Explore the forecast: See a detailed 7-day forecast with average temperature, weather condition, and precipitation for each day.

# Components
1. WeatherCard
The WeatherCard component displays the current weather information for a specified city.
It includes:
Current temperature in Celsius.
Humidity percentage.
Wind speed in meters per second.
Weather condition description (e.g., cloudy, rainy).

2. ForecastWeather
The ForecastWeather component provides a 7-day forecast for a specified city.
Each forecast card includes:
Date of the forecasted day.
Weather condition icon.
Average temperature in Celsius.
Weather condition description.
Precipitation amount in millimeters (if available).

3. TemperatureChart
The TemperatureChart component (planned for future implementation) will visualize the temperature trend over the forecast period.
It uses Chart.js to create a line chart with:
Dates on the x-axis representing each forecasted day.
Average daily temperatures on the y-axis.

# Future Enhancements
1. Interactive Features: Implement interactive features such as selecting different cities or toggling between Celsius and Fahrenheit temperatures.
2. Additional Weather Data: Expand the dashboard to include more detailed weather data such as UV index, sunrise/sunset times, and air quality index.
3. Responsive Design: Ensure the dashboard is fully responsive across different screen sizes and devices.
