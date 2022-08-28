import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">


        <footer>
          This project was coded by{" "}
          <a
            href="https://nickiepotter-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nickie Potter
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/chickienickie/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}