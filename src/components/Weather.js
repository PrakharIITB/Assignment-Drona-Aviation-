import React from "react";
import { useState } from "react";
import './weather.css'



export default function Weather() {
    const api = {
        key: '1b559666d9ee33cea1e3b11e42b42a38',
        base: 'https://api.openweathermap.org/data/2.5/',
        icon: 'http://openweathermap.org/img/wn/'
    }
    const items = [0, 1, 2, 3, 4, 5];
    var list = [];
    const [city, setcity] = useState();
    const [weather, setweather] = useState({});
    const [forecast, setforecast] = useState({});
    const pressed = () =>{
        console.log(city);
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            setweather(result);
            // icon = api.icon+weather.weather[0].icon+"@2x.png";
        });

        fetch((`${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`))
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            setforecast(result);
            // icon = api.icon+weather.weather[0].icon+"@2x.png";
        });
        
        
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          pressed();
        }
      };
    return(
        <div className="container">
            <div className="input-div">

                <input type="text" 
                className="city-input"
                placeholder="Search for cities"
                onChange={(e)=>setcity(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                {/* <button onClick={pressed}>Search</button> */}
            </div>
        
        {typeof weather.main!='undefined'?
            <div className="current-info">
                <div className="name-icon">
                    <div className="name" style={{marginTop: '3vw'}}>
                        <h1>{weather.name}</h1>
                        <h3>Humidity {weather.main.humidity}%</h3>
                        <div style={{marginTop: '3vw'}}>
                            <h2>{weather.main.temp}°C</h2>    
                            <h3>Feels like: {weather.main.feels_like}°C</h3>
                        </div>
                    </div>
                    <div className="icon" style={{marginTop: '-1vw'}}>
                        <img className="current-icon" src={api.icon+weather.weather[0].icon+"@2x.png"} alt="" />        
                        <h2 style={{marginTop: '-3vw'}}>{weather.weather[0].main}</h2>
                    </div>
                    
                </div>
            </div>
            :
            <div className="current-info">
                <h1>Enter a City</h1>
            </div>    
        }
        {typeof forecast.list!='undefined'?
        <div className="forecast">
            <h1 style={{margin: '0 0 1rem 0'}}>Forecast</h1>
            <div className="forecast-list">
            {items.map((item) =>(
                <div className="forecast-item" >
                    <h3>{forecast.list[item].dt_txt}</h3>
                    <img src={api.icon+forecast.list[item].weather[0].icon+"@2x.png"} alt="" />        
                    <h2>{forecast.list[item].main.temp}°C</h2> 
                </div>
            ))}
            </div>
            
            
        </div>:
        <p></p>
    }
        
        </div>
      
    )

}



