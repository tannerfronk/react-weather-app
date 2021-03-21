import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherInfo from './weather.json'

function Weather() {

  const [ isFahrenheit, setIsFahrenheit ] = useState(true)
  const [ name, setName ] = useState('Salt Lake City')
  console.log(name)

  function renderCitySelect(){
    return <CitySelect 
      onClick = {() => {
        setName(document.getElementById('citySelect').value)
        ReactDOM.render(
          <Weather />,
          document.getElementById('root')
        );
      }}
    />
  }

  function TodaysTile({value}){
    if(name === ""){
      return(
        <div className="square">
          <p>No data for selected City</p>
        </div>
      )
    } else if(isFahrenheit === true){
      return(
        <div className="todaySquare">
          <div className ="todayTop">
            <h2>Today's Date: {WeatherInfo[name][0].days[0].date}</h2>
            <h2>Current Temperature: {WeatherInfo[name][0].currentTempF}</h2>
            <h3>High: {WeatherInfo[name][0].days[value].highF}</h3>
            <h3>Low: {WeatherInfo[name][0].days[value].lowF}</h3>
            <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].chance}</h3>
            <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].wind}</h3>
          </div>
          <h2>Hourly Forecast:</h2>
          <div className ="todayBot">
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[0].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[0].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[1].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[1].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[2].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[2].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[3].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[3].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[4].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[4].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[5].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[5].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[6].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[6].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[7].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[7].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[8].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[8].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[9].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[9].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[10].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[10].tempF}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[11].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[11].tempF}</p>
            </div>
          </div>
        </div>
      )
    } else if(isFahrenheit === false){
      return(
        <div className="todaySquare">
          <div className ="todayTop">
            <h2>Today's Date: {WeatherInfo[name][0].days[0].date}</h2>
            <h2>Current Temperature: {WeatherInfo[name][0].currentTempC}</h2>
            <h3>High: {WeatherInfo[name][0].days[value].highC}</h3>
            <h3>Low: {WeatherInfo[name][0].days[value].lowC}</h3>
            <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].chance}</h3>
            <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].wind}</h3>
          </div>
          <h2>Hourly Forecast:</h2>
          <div className ="todayBot">
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[0].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[0].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[1].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[1].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[2].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[2].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[3].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[3].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[4].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[4].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[5].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[5].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[6].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[6].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[7].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[7].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[8].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[8].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[9].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[9].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[10].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[10].tempC}</p>
            </div>
            <div>
              <p>{WeatherInfo[name][0].days[value].hours[11].hour}:</p>
              <p>{WeatherInfo[name][0].days[value].hours[11].tempC}</p>
            </div>
          </div>
        </div>
        
      )
    }
  }

  function renderTodaysFahrenheitTile(i){
      return <TodaysTile
      value = {i}
      />
  }

  function FahrenheitWeatherTile({value}){
    if(name === ""){
      return(
        <div className="square">
          <p>No data for selected City</p>
        </div>
      )
    } else {
      return(
        <div className="square">
          <h2>{WeatherInfo[name][0].days[value].date}</h2>
          <h2>Current Temperature: {WeatherInfo[name][0].currentTempF}</h2>
          <h3>High: {WeatherInfo[name][0].days[value].highF}</h3>
          <h3>Low: {WeatherInfo[name][0].days[value].lowF}</h3>
          <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].chance}</h3>
          <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].wind}</h3>
        </div>
      )
    }
  }

  function CelsiusWeatherTile({value}){
    if(name === ""){
      return(
        <div className="square">
          <p>No data for selected City</p>
        </div>
      )
    } else {
      return(
        <div className="square">
          <h2>{WeatherInfo[name][0].days[value].date}</h2>
          <h2>Current Temperature: {WeatherInfo[name][0].currentTempC}</h2>
          <h3>High: {WeatherInfo[name][0].days[value].highC}</h3>
          <h3>Low: {WeatherInfo[name][0].days[value].lowC}</h3>
          <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].chance}</h3>
          <h3>Chance of precipitation: {WeatherInfo[name][0].days[value].wind}</h3>
        </div>
      )
    }
  }
  
  function DegreeTypeBtn({onClick}){
    return(
      <button id="degreeBtn" onClick={onClick}>
        Change Degree Type
      </button>
    )
  }
  
  function CitySelect({onClick}){
    return(
      <div className="citySearch">
        <input id="citySelect" placeholder={name}>
        
        </input>
        <button onClick={onClick}>Get Weather</button>
      </div>
    )
  }
  function renderWeatherTile(i){
    if(isFahrenheit === true){
      return <FahrenheitWeatherTile
      value = {i}
      />
    } else if(isFahrenheit === false){
      return <CelsiusWeatherTile
      value = {i}
    />
    }
    
  }
  function renderChangeDegreeTypeBtn(){
    return <DegreeTypeBtn 
    onClick={() => {
      setIsFahrenheit(!isFahrenheit)
    }}
    />
  }
    return (
      <div className="container">
          {renderCitySelect()}
          {renderChangeDegreeTypeBtn()}
          {renderTodaysFahrenheitTile(0)}
        <div className="currentWeather">
          {renderWeatherTile(1)}
          {renderWeatherTile(2)}
          {renderWeatherTile(3)}
          {renderWeatherTile(4)}
          {renderWeatherTile(5)}
          {renderWeatherTile(6)}
        </div>
      </div>
    )

}

ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);
