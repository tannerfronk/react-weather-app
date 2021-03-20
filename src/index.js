import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherInfo from './weather.json'



let name = 'Salt Lake City'
console.log(WeatherInfo[name][0].days[0].highF)
let degree;

function FahrenheitWeatherTile({value}){
  return(
    <div className="square">
      <h2>Current Temperature: {WeatherInfo[name][0].currentTempF}</h2>
      <h3>High: {WeatherInfo[name][0].days[value].highF}</h3>
      <h3>Low: {WeatherInfo[name][0].days[value].lowF}</h3>

    </div>
  )
}
function CelsiusWeatherTile({value}){
  return(
    <div className="square">
      <h2>Current Temperature: {WeatherInfo[name][0].currentTempC}</h2>
      <h3>High: {WeatherInfo[name][0].days[value].highC}</h3>
      <h3>Low: {WeatherInfo[name][0].days[value].lowC}</h3>

    </div>
  )
}

function DegreeTypeBtn({onClick}){
  return(
    <button id="degreeBtn" onClick={onClick}>
      Change Degree Type
    </button>
  )
}

function CitySelect({onSubmit}){
  return(
    <form name="citySelect">
      <input id="citySelect" placeholder="Type in your City" onSubmit={onSubmit}>
      
      </input>
      <button type="submit">Submit</button>
    </form>
  )
}

function Weather() {

  const [ isFahrenheit, setIsFahrenheit ] = useState(true)
  const [ name, setName] = useState()
  
  degree = isFahrenheit ? 'F' : 'C'
  console.log(name)

function renderCitySelect(){
  return (<CitySelect 
  onSubmit = {() => {

    setName = document.getElementById('citySelect').value
  }}
  />
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
        {renderWeatherTile(1)}

      </div>



    </div>
  )

}



ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);
