import "./App.css";
import WeatherApp from "./weatherapp.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Reminder ^ This code is used for Bootstrap */}
        <WeatherApp defaultcity="Wellington" />
        <p className="footer">
          This project was coded by Jandels and is open sourced on{" "}
          <a
            href="https://github.com/Jandels/weather_and_dictionary_react_app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://github.com/Jandels/weather_and_dictionary_react_app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
