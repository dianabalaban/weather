import React, { useEffect, useState } from 'react';
import Daily from './Daily';
import Today from './Today';

export default function City() {

        const pathname = window.location.pathname.substring(1);
        const [weather, getWeather] = useState([]);
        const [otherData, getOtherData] = useState([]);
        const getInfo = async () => {
          const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ pathname+'&units=metric&appid=8f36932e2260c034d41cb86759bb3fd5'
          );
          const data = await response.json();
          getWeather(data.list); 
          getOtherData(data.city);
      
        };
        useEffect(() => { getInfo() }, []);
      
        let stats = [
          { id:1, 
            min: 1, 
            datemin: 0,
            max: 2, 
            datemax: 0,
            windmin:0,
            windmax:0,
            hourly:[]
          },
          { id:2, 
            min: 0, 
            datemin: 0,
            max: 0 ,
            datemax: 0,
            windmin:0,
            windmax:0,
            hourly:[]
          },
          { id:3,
            min: 0, 
            datemin: 0,
            max: 0,
            datemax: 0,
            windmin:0,
            windmax:0,
            hourly:[]
          }
        ]
      
        const formatDate = (time_to_show) => {
          const t = new Date(time_to_show * 1000);
          const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
          let formatted = [];
          formatted.push(monthNames[t.getMonth()] + ' ' + t.getDate());
          formatted.push(('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2));
      
          return formatted;
        }
      
        const temp = (element) => { return Math.round(element) + '°C' };
      
        const getNextDate = (dataArray) =>
          dataArray.findIndex(x => formatDate(x.dt)[1] === "01:00");
      
      
        const calculate = (dataArray) => {
          let position = getNextDate(dataArray);
          let max, min, newArr,maxwind, minwind;
          for (let i = 0; i < 3; i++) {
      
            newArr = dataArray.slice(position, position + 8);
          
            position = position + 8;
      
            max = Math.max(...newArr.map(o => o.main.temp), 0);
            min = Math.min(...newArr.map(o => o.main.temp));
            stats[i].max = Math.round(max);
            stats[i].min = Math.round(min);
            stats[i].datemax = formatDate(newArr[newArr.findIndex(element => element.main.temp===max)].dt);
            stats[i].datemin = formatDate(newArr[newArr.findIndex(element => element.main.temp===min)].dt);
            stats[i].hourly = newArr.map(a => Math.round(a.main.temp))
      
            maxwind = Math.max(...newArr.map(o => o.main.temp), 0);
            minwind = Math.min(...newArr.map(o => o.main.temp));
            stats[i].windmax = maxwind + ' m/s';
            stats[i].windmin = minwind + ' m/s'; 
      
          }
         console.log(stats);
        }

      function addClassName (){
   if(pathname==='Amsterdam') {return 'ams-background'}
   if(pathname==='London') {return 'lnd-background'}
   if(pathname==='Paris') {return 'prs-background'}
      }
      
    
    if(weather.length) {
        calculate(weather);
    return (
        <div className={'App '+ addClassName()}>
          <div className="header">
         <Today temperature={temp(weather[0].main.temp)}
          feels_like = {temp(weather[0].main.feels_like)} 
          current_date = {formatDate(weather[0].dt)} 
          sunset={formatDate(otherData.sunset)}
          sunrise={formatDate(otherData.sunrise)}
          wind = {weather[0].wind.speed}
          icon = {weather[0].weather[0].icon}
          pathname = {pathname}
           ></Today>
      
      </div>
      <div className="containerDaily">
      {stats.map(element => (
        <Daily key={element.id}
         max = {element.max}
          min={element.min} 
          minwind={element.windmin}
           maxwind={element.windmax}
           datemin={element.datemin[1]}
           datemax={element.datemax[1]}
           date={element.datemin[0]}
           hourly ={element.hourly}
           
           />
      ))} </div> </div>
    )} else {return ''} 
}
