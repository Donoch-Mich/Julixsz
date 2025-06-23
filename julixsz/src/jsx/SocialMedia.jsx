import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './../css/SocialMedia.css';

function SocialMedia() {
  return (
    <div className="socialmedia-container">
      <header className="socialmedia-header">
        <h1>Social Media JulixSz</h1>
        <p>Witaj na oficjalnej stronie społeczności JulixSz! Tu znajdziesz wszystkie moje profile, najnowsze aktualności i materiały.</p>
      </header>

      <section className="about-me">
        <h2>O mnie</h2>
        <p>
          Cześć! Jestem JulixSz – tworzę filmy, streamuję i dzielę się swoją pasją z ponad 170 tysiącami subskrybentów. Zapraszam do śledzenia moich kanałów, gdzie znajdziesz gaming, lifestyle, a także współpracę i więcej.
        </p>
      </section>

      <section className="social-links">
        <h2>Moje profile społecznościowe</h2>
        <div className="social-cards">
          <a href="https://instagram.com/julixsze" target="_blank" rel="noopener noreferrer" className="social-card instagram">
            <div className="icon instagram-icon" />
            <h3>Instagram</h3>
            <p>@julixsze</p>
          </a>

          <a href="https://twitch.tv/julixsze" target="_blank" rel="noopener noreferrer" className="social-card twitch">
            <div className="icon twitch-icon" />
            <h3>Twitch</h3>
            <p>twitch.tv/julixsze</p>
          </a>

          <a href="https://discord.com/invite/Ft3Ua8JsJp" target="_blank" rel="noopener noreferrer" className="social-card discord">
            <div className="icon discord-icon" />
            <h3>Discord</h3>
            <p>Dołącz do społeczności</p>
          </a>

          <a href="https://tiktok.com/@julixsze" target="_blank" rel="noopener noreferrer" className="social-card tiktok">
            <div className="icon tiktok-icon" />
            <h3>TikTok</h3>
            <p>@julixsze</p>
          </a>

          <a href="https://www.youtube.com/@JulixSz" target="_blank" rel="noopener noreferrer" className="social-card youtube">
            <div className="icon youtube-icon" />
            <h3>YouTube</h3>
            <p>Subskrybuj kanał</p>
          </a>
        </div>
      </section>

      <section className="followers-section">
        <h2>Moje statystyki</h2>
        <div className="counters">
          <div className="counter">
            <h3>Instagram Followers</h3>
            <AnimatedCounter targetNumber={54000} />
          </div>
          <div className="counter">
            <h3>Twitch Followers</h3>
            <AnimatedCounter targetNumber={14300} />
          </div>
          <div className="counter">
            <h3>YouTube Subskrybenci</h3>
            <AnimatedCounter targetNumber={171000} />
          </div>
          <div className="counter">
            <h3>TikTok Followers</h3>
            <AnimatedCounter targetNumber={510200} />
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Kontakt i współpraca</h2>
        <p>Jeśli chcesz się ze mną skontaktować, napisz na:</p>
        <ul>
          <li><strong>Email 1:</strong> julixsz@stormmedia.gg</li>
          <li><strong>Email 2:</strong> julix.cher@gmail.com</li>
        </ul>
        <p>Zapraszam też do kontaktu na Discordzie lub mediach społecznościowych.</p>
      </section>
    </div>
  );
}

export default SocialMedia;
