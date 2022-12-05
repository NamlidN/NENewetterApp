import './App.css';
import { useState, useEffect } from 'react';
import BTNs from './components/Buttons';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [curWeather, setCurWeather] = useState([]);
  const [city, setCity] = useState("Berlin");

  function getCity(selectedCity) {
    setCity(selectedCity);
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=de&appid=c41b8a39a3c402e02819bd223ee1f116`)
      .then(response => response.json())
      .then((data) => {
        setCurWeather(data);
        console.log(data);

      });

  }, [city]);

  return (
    <div className='mainDiv'>

      <BTNs getCity={getCity} />
      <CurrentWeather weatherData={curWeather} city={city} />
    </div>
  );
}

export default App;