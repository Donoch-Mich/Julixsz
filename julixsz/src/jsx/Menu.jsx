import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleBackground from './ToggleBackground';
import './../css/Menu.css';
import logo from './../img/logo.png';

import AuthButtons from './AuthButtons';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Stan logowania

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    toggleMenu();
  };

  // Funkcja do pobierania aktualnego motywu
  const getCurrentTheme = () =>
    document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';

  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());

  // Reagowanie na zmianę klasy "dark-mode"
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Czyszczenie obserwatora przy odmontowaniu
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`menu-content ${menuOpen ? 'active' : ''}`}>
          <div className="menu-header">
            <img src={logo} className='menu-logo' alt="Logo" />
            <div className="close-menu" onClick={toggleMenu}>
              &times;
            </div>
          </div>

          <div className="menu-items">
            <Link to="/" onClick={toggleMenu}><p>Strona Główna</p></Link>
            <Link to="/Social Media" onClick={toggleMenu}><p>Social Media</p></Link>
            <Link to="/Minecraft" onClick={toggleMenu}><p>Minecraft</p></Link>
            <Link target="_blank" to="https://diwu.pl/104-limited-edition-by-julixsz" onClick={toggleMenu}><p>Merch</p></Link>
          </div>

          {/* Przycisk logowania/rejestracji/wylogowania */}
          <AuthButtons
            isLoggedIn={userLoggedIn}
            onLogout={handleLogout}
            theme={currentTheme}
          />

          <div className="menu-footer">
            <ToggleBackground />
          </div>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Menu;
