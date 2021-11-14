import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props) {
  const [weatherdata, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const APIkey = "692e81252347f5426b1d20da827a7848";
    const units = "metric";
    const ApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`;

    axios.get(ApiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherdata.loaded) {
    return (
      <div className="Weather">
        <div className="row search-bar">
          <div className="col-8 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Input a city..."
                  onChange={handleCityUpdate}
                />
              </div>
            </form>
          </div>

          <div className="col-4">
            <button className="button">Search</button>
            <button className="button">Weather at your Location</button>
          </div>
        </div>

        <WeatherInfo data={weatherdata} />
      </div>
    );
  } else {
    search();
    return "Loading.....";
  }
}
