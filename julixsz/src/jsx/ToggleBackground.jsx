import React, { useState, useEffect } from 'react';
import './../fontello/css/fontello.css';
import './../css/ToggleBackground.css';

const ToggleBackground = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    // Odczytaj z localStorage przy starcie
    const storedMode = localStorage.getItem('nightMode');
    if (storedMode === 'true') {
      setIsNightMode(true);
      document.documentElement.classList.add('dark-mode');
    } else {
      setIsNightMode(false);
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const toggleIcon = () => {
    const newMode = !isNightMode;
    setIsNightMode(newMode);
    // Zapisz natychmiast po kliknięciu
    localStorage.setItem('nightMode', newMode ? 'true' : 'false');

    if (newMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <div 
      onClick={toggleIcon}
      style={{
        cursor: 'pointer',
        fontSize: '24px',
        fontFamily: 'fontello',
        userSelect: 'none'
      }}
    >
      {isNightMode ? (
        <span style={{ fontFamily: 'fontello' }}>&#xf186;</span>
      ) : (
        <span style={{ fontFamily: 'fontello' }}>&#xe800;</span>
      )}
    </div>
  );
};

export default ToggleBackground;
