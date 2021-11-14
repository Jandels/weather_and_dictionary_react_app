import "./App.css";
import WeatherApp from "./WeatherApp.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Reminder ^ This code is used for Bootstrap */}
        <WeatherApp />
        <p className="footer">
          This project was coded by Jandels and is{" "}
          <a
            href="https://github.com/Jandels/weather_and_dictionary_react_app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </p>
      </div>
    </div>
  );
}
