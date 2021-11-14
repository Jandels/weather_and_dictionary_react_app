import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
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
          <h1>City Weather</h1>
          <ul>
            <li>22°C</li>
            <li>Cloudy with a chance of meatballs</li>
            <li>
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Italian Trulli"
              ></img>
            </li>
          </ul>
        </div>

        <div className="col-6 weather-quality ">
          <h1>Weather Quality</h1>
          <ul>
            <li>Sunrise: 9am</li>
            <li>Sunset: 6pm</li>
          </ul>

          <div className="row">
            <div className="col-4">
              <h5>Precipitation: 85%</h5>
            </div>
            <div className="col-4">
              <h5>Humidity: 23%</h5>
            </div>
            <div className="col-4">
              <h5>wind Speed: 16 km/ph</h5>
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
}
