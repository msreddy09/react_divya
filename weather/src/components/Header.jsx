import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const API_KEY = "32a5bb7b9aa1126387e06acad817149e";
const API_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
const API_URL_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

// const LOCATION_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}6&longitude=${lang}&localityLanguage=en`

const Header = () => {
    const [cityName, setCityName] = useState('');
    const [currentWeather, setCurrentWeather] = useState(0);

    const [weatherInfo, setWeahterInfo] = useState(null);

    const handleCityNameChange = (event) => {

        setCityName(event.target.value)
    }


    const getWeatherInfo = (cityText) => {

        // fetch(API_URL_CURRENT+ '&q=' + cityName).then( response => {
        //     if(response.ok){
        //         return response.json()
        //     }else {
        //         console.log('There is some error please check');
        //     }
        // }).then(data => {
        //     console.log(data);
        // })
        const ct = cityText || cityName
        axios.get(API_URL_CURRENT + '&q=' + ct)
            .then(function (response) {
                // handle success
                setWeahterInfo(response.data); /// weatherInfo = response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    // useEffect(() => {
    //     let lang = ''
    //     let lat = '';

    //     navigator.geolocation.getCurrentPosition((position) => {
    //         lat = position.coords.latitude;
    //         lang = position.coords.longitude
    //     });

    //     axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}6&longitude=${lang}&localityLanguage=en`)
    //         .then(function (response) {
    //             // handle success
    //             setCityName(response.data.city);
    //             getWeatherInfo(response.data.city)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .finally(function () {
    //             // always executed
    //         });


    // }, [currentWeather])

    return (<div>
        <div>
            <input onChange={handleCityNameChange} value={cityName} />
            <button onClick={() => getWeatherInfo()}>Click Me</button>
            {/* <button onClick={() => setCurrentWeather(currentWeather+1)}>Current Location Weather</button> */}
        </div>
        {weatherInfo && <WeatherCard weatherData={weatherInfo} ind={2} />}

    </div>
    )
}

export default Header;