import React from "react";


const WeatherCard = ({weatherData, ind}) => {


    const formatString = (temp) => {
        return <span>{temp}&deg;</span>

    }
    const formatDate =(datestring) => {
        return new Date(datestring).toString();
    }
    return(
        <div className="weather-card">
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <div>{formatString(Math.round(weatherData.main.temp))}</div>
            <div>{formatDate(weatherData.sys.sunrise)}</div>
        </div>
    )
}

export default WeatherCard


