import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [weatherdata, setWeatherData] = useState({ loaded: false });

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
      date: "Thursday 16th July",
    });
  }

  if (weatherdata.loaded) {
    return (
      <div className="WeatherApp">
        <div className="row search-bar">
          <div className="col-8 ">
            <form>
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Input a city..."
                />
              </div>
            </form>
          </div>

          <div className="col-4">
            <button className="button">Search</button>
            <button className="button">Weather at your Location</button>
          </div>
        </div>

        <div className="row">
          <div className="col-5 current-weather">
            <h1>{weatherdata.city}</h1>

            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <span className="current-temperature">
                      {Math.round(weatherdata.temperature)}
                    </span>
                    <span className="temperature-unts">
                      <a href="">°C|°F</a>
                    </span>
                  </li>
                  <li>{weatherdata.date}</li>
                  <li>Max temp/Min Temp</li>
                  <li className="text-capitalize">{weatherdata.description}</li>
                </ul>
              </div>
              <div className="col-6 large-weather-icon">
                <img src={weatherdata.iconURL} alt="Italian Trulli"></img>
              </div>
            </div>
          </div>

          <div className="col-6 weather-quality ">
            <h1>Weather Quality</h1>

            <div className="row ">
              <div className="col-6">
                <ul>
                  <li>Sunrise: 9am</li>
                  <li>Sunset: 6pm</li>
                </ul>
              </div>

              <div className="col-6">
                {" "}
                <img
                  className="sunrise-set-icon"
                  src="https://cdn.icon-icons.com/icons2/2787/PNG/512/sun_and_moon_icon_177460.png"
                  alt="sunrise sunset icon"
                ></img>
              </div>
            </div>

            <div className="row">
              <div className="col-3 precipitation">
                <h5>
                  Precipitation
                  <br /> 85%
                </h5>
              </div>
              <div className="col-3 humidity">
                <h5>
                  Humidity <br /> {weatherdata.humidity}
                </h5>
              </div>
              <div className="col-3 windspeed">
                <h5>
                  Wind Speed <br /> {weatherdata.windspeed} km/ph
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-11 weather-forecast">
            <h1>Weather Forecast</h1>

            <div className="row">
              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Monday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>

              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Tuesday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>

              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Wednesday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>

              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Thursday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>

              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Friday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>

              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Italian Trulli"
                ></img>
                <h3>Saturday</h3>
                <ul>
                  <li>Temp Max</li>
                  <li>Temp Min</li>
                  <li>Icon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const APIkey = "692e81252347f5426b1d20da827a7848";
    const units = "metric";
    const ApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${APIkey}&units=${units}`;

    axios.get(ApiURL).then(handleResponse);
    return "Loading.....";
  }
}
