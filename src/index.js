import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function WeatherTile(){
  return(
    <div className="square">
      <h2>Current Temperature: </h2>

    </div>
  )
}

function Weather() {

function renderWeatherTile(){
  return <WeatherTile />
}
  return (
    <div className="container">
      <div classNam="currentWeather">
        {renderWeatherTile()}

      </div>



    </div>
  )

}



ReactDOM.render(
  <Weather />,
  document.getElementById('root')
);
