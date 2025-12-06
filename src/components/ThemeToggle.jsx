import React, { useEffect, useState } from "react";
import "../App.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [weather, setWeather] = useState(null);
  const [rate, setRate] = useState(null);

  // -----------------------------
  // 🌤 CLIMA
  // -----------------------------
  useEffect(() => {
    const API_KEY = "6204b9b292a22aa5bf00931e93b692ae";

    const defaultWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Santo Domingo&units=metric&lang=es&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather({
        city: data.name,
        temp: data.main.temp,
        desc: data.weather[0].description,
      });
    };

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${API_KEY}`
        );
        const data = await res.json();

        setWeather({
          city: data.name,
          temp: data.main.temp,
          desc: data.weather[0].description,
        });
      },
      () => {
        defaultWeather();
      }
    );
  }, []);

  // -----------------------------
  // 💱 TASA USD → DOP
  // -----------------------------
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const data = await res.json();
        setRate(data.rates.DOP);
      } catch (e) {
        setRate("Error");
      }
    };

    fetchRate();
  }, []);

  // -----------------------------
  // 🌙 MODO OSCURO
  // -----------------------------
  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-info-group">
      {/* BOTÓN MODO OSCURO */}
      <button 
        className="theme-toggle-btn"
        aria-label="Toggle Theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* CLIMA + TASA DE CAMBIO */}
      <div className="mini-info">
        {weather ? (
          <span className="weather-mini">
            🌡 {weather.temp.toFixed(1)}°C <small>({weather.city})</small>
          </span>
        ) : (
          <span>Cargando clima...</span>
        )}

        {rate ? (
          <span className="rate-mini">💱 {rate}</span>
        ) : (
          <span>Cargando tasa...</span>
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;
