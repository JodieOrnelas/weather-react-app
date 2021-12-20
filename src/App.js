import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a href="https://fervent-roentgen-43ed2b.netlify.app/">
            Jodie Ornelas
          </a>{" "}
          and is open sourced on{" "}
          <a href="https://github.com/JodieOrnelas/weather-react-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
