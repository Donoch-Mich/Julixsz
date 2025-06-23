import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './jsx/Menu';
import SocialMedia from './jsx/SocialMedia.jsx';
import Page2 from './jsx/HomePage.jsx';
import Footer from './jsx/Footer.jsx';
import './css/App.css'
 import Minecraft from './jsx/Minecraft.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Page2 />} />
          <Route path="/Social Media" element={<SocialMedia />} />
          <Route path="/Minecraft" element={<Minecraft />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
