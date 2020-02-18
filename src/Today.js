import React from 'react';
//import { Line } from 'react-chartjs-2';

export default function Today(temperature) {  
    
    let x = './' + temperature.icon + '.svg'
    return (
        <div className="headerContainer">
          <h1>{temperature.pathname}</h1>
          <h3>{temperature.current_date[0]}</h3>
          <h2>{temperature.temperature} </h2>
          <img className="icon"  src={x} alt=''/> 
          <br/>
         <h4> Feels like {temperature.feels_like} | Sunrise: {temperature.sunrise[1]} | Sunset: {temperature.sunset[1]} | Wind: {temperature.wind} m/s</h4>
        
        </div>
   
    )
}
