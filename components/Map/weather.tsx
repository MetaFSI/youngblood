import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
interface WeatherData {
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }
  
const Weather = ({ latitude, longitude }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [roundedTemperature, setRoundedTemperature]:any = useState(null);

  useEffect(() => {
    getWeatherData();
  }, [latitude, longitude]);

  const getWeatherData = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '38de55cd9bc47e1cda096f6f704163a7', // Replace with your OpenWeatherMap API key
          units: 'metric'
        }
      });
      setWeatherData(response.data);
      setRoundedTemperature(Math.ceil(response.data.main.temp));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className=" rounded-br-lg rounded-bl-lg">
     
      <div className="flex items-center justify-center border-b-8">
        {weatherData && (
          <img
            className="w-16"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        )}
        <div className="flex">
          
          <p className="font-black text-[40px] animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out">
            {roundedTemperature}
          </p>
          <p className="font-bold text-[20px] ml-[20px] text-primary mb-[-20px] drop-shadow">°C</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 pt-3'>
        <div className='flex gap-2 items-center font-semibold'>
            Wind check
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
        </div>
        <a className='flex bg-primaryho justify-center text-white rounded-full gap-1 items-center font-semibold' href="https://www.windguru.cz/49317" target="_blank" rel="noopener noreferrer">
    Windguru
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
</a>

        </div>
    </div>
  );
};

export default Weather;
