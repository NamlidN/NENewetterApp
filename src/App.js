import './App.css';
import { useState, useEffect } from 'react';


// function CurrentWeather(props) {
//   if(props.weatherData.weather=== undefined) {
// return
//   }
//   return (
//   
//   );
// };

// export default CurrentWeather;
function App() {
  const [A, setA] = useState("München");
const [B, setB] = useState()
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${A}&lang=de&appid=3602038086664bccc05a7c6b781332f8`)
      .then(response => response.json())
      .then((data) => {
setB(data);
      });
  });
  console.log(B);
  if(B === undefined){
    return
  }
  return (
    <div className='mainDiv'>
      <button onClick={() => setA("Berlin")}>Berlin</button>
      <button onClick={() => setA("München")}>München</button>
      <button onClick={() => setA("Hamburg")} >Hamburg</button>
      <section>
           <article className="A">
               <h1>{A}</h1>
               <img src={`http://openweathermap.org/img/wn/${B.weather[0].icon}@2x.png`}alt="asdf"></img>
           </article>
           <article className="B">
               <p>Current :{(B.main.temp - 274.15).toFixed(2) + "°C"}</p>
               <p>Wind Speed : {B.wind.speed + " mi/hr"}</p>
           </article>
     </section>

    </div>
  );
}

export default App;