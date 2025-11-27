import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Конвертация Цельсий → Фаренгейт
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '') {
      setFahrenheit('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const fahr = (numValue * 9/5) + 32;
      setFahrenheit(fahr.toFixed(1));
    }
  };

  // Конвертация Фаренгейт → Цельсий
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '') {
      setCelsius('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const celsius = (numValue - 32) * 5/9;
      setCelsius(celsius.toFixed(1));
    }
  };

  // Очистка полей
  const clearFields = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div className="app">
      <div className="converter-card">
        <h1 className="title">🌡️ Конвертер температур</h1>
        
        <div className="input-group">
          <label className="input-label">Градусы Цельсия</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="0"
            className="temperature-input"
          />
          <span className="unit">°C</span>
        </div>

        <div className="input-group">
          <label className="input-label">Градусы Фаренгейта</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="32"
            className="temperature-input"
          />
          <span className="unit">°F</span>
        </div>

        <button onClick={clearFields} className="clear-btn">
          Очистить
        </button>

        <div className="formulas">
          <h3>Формулы:</h3>
          <p>°F = (°C × 9/5) + 32</p>
          <p>°C = (°F - 32) × 5/9</p>
        </div>
      </div>
    </div>
  );
}

export default App;