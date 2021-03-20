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
      <div>
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
        <div className="currentWeather">
          {renderWeatherTile(0)}
        </div>
      </div>
    )

}

ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);
