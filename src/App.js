import "./App.css";
import WeatherApp from "./WeatherApp.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
            href="https://loving-lalande-b8bfeb.netlify.app"
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
