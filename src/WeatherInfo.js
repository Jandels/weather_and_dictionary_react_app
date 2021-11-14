import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5 current-weather">
          <h1>{props.data.city}</h1>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <span className="current-temperature">
                    {Math.round(props.data.temperature)}
                  </span>
                  <span className="temperature-unts">
                    <a href="">°C|°F</a>
                  </span>
                </li>
                <li>
                  {" "}
                  <FormattedDate date={props.data.date} />
                </li>
                <li>Max temp/Min Temp</li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
            <div className="col-6 large-weather-icon">
              <img src={props.data.iconURL} alt="Italian Trulli"></img>
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
                Humidity <br /> {props.data.humidity}
              </h5>
            </div>
            <div className="col-3 windspeed">
              <h5>
                Wind Speed <br /> {props.data.windspeed} km/ph
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
}
