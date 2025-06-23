import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/buttons.css'; // nasz stylizowany CSS

const AuthButtons = ({ isLoggedIn, onLogout, theme = 'light' }) => {
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const buttonClass = `auth-btn ${isDark ? 'auth-btn-dark' : 'auth-btn-light'}`;

  return (
    <div className="auth-buttons">
      {isLoggedIn ? (
        <button className={buttonClass} onClick={onLogout}>
          Wyloguj się
        </button>
      ) : (
        <>
          <button className={buttonClass} onClick={() => navigate('/login')}>
            Zaloguj się
          </button>
          <button className={buttonClass} onClick={() => navigate('/register')}>
            Zarejestruj się
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;