import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with Chart.js
ChartJS.register(
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TemperatureChart = ({ forecast }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!forecast || forecast.length === 0) return;

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy existing chart instance if any
    }

    const data = {
      labels: forecast.map(day => new Date(day.dt * 1000).toLocaleDateString()),
      datasets: [
        {
          label: 'Temperature',
          data: forecast.map(day => day.temp.day),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    chartRef.current = new ChartJS(canvasRef.current, {
      type: 'line',
      data,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [forecast]);

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return <canvas ref={canvasRef} />;
};

export default TemperatureChart;
