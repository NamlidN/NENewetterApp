
function CurrentWeather(props) {
    if(props.weatherData.weather=== undefined) {
return
    }
    return (
        <section>
            <article className="A">
                <h1>{props.city}</h1>
                <img src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}alt="asdf"></img>
            </article>
            <article className="B">
                <p>Current :{(props.weatherData.main.temp - 274.15).toFixed(2) + "°C"}</p>
                <p>Wind Speed : {props.weatherData.wind.speed + " mi/hr"}</p>
            </article>
        </section>
    );
};

export default CurrentWeather;