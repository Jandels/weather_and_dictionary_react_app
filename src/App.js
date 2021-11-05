import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <body className="App-header">
          <h1>
            Welcome <br />
          </h1>

          <h3>Emma's Dictionary and Weather App Portfollio</h3>

          <button className="btn btn-primary">Weather</button>
          <button className="btn btn-secondary">Dictionary</button>
        </body>

        <footer>
          This project was coded by Jandels and is{" "}
          <a
            href="https://github.com/Jandels/weather_and_dictionary_react_app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
