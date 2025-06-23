import React, { useState } from 'react';
import './../css/Footer.css';

function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>JulixSz</h2>
          <p>filmy robię</p>
          <p>
            <span
              className="copy-link"
              onClick={() => copyToClipboard('julixsz@stormmedia.gg')}
            >
              julixsz@stormmedia.gg
            </span>
          </p>
          <p>
            <span
              className="copy-link"
              onClick={() => copyToClipboard('julix.cher@gmail.com')}
            >
              julix.cher@gmail.com
            </span>
          </p>
          <p>🇵🇱 Poland</p>
        </div>

        <div className="footer-right">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://instagram.com/julixsze" target="_blank">Instagram</a></li>
            <li><a href="https://twitch.tv/julixsze" target="_blank">Twitch</a></li>
            <li><a href="https://discord.com/invite/Ft3Ua8JsJp" target="_blank">Discord</a></li>
            <li><a href="https://tiktok.com/@julixsze" target="_blank">TikTok</a></li>
            <li><a href="https://www.youtube.com/@JulixSz" target="_blank">YouTube</a></li>
          </ul>
        </div>
      </div>

      {copied && (
        <div className="copy-popup">
          Skopiowano do schowka!
        </div>
      )}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JulixSz. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}

export default Footer;
