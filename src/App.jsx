import React, { useEffect, useState } from "react";
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import assemblyLogo from "../img/logo Assembly19-transparent.png";
import assemblyPoster from "../img/poster assembly19.jpg";
import bemLogo from "../img/logoBEM-trim.png";
import praditaLogo from "../img/pradita-university.png";
import participantVirtualBackground from "../img/virtual background peserta.png";

const EVENT_DATE = new Date("2026-10-30T15:30:00+07:00").getTime();
const MINIMUM_PRELOADER_TIME = 650;
const PRELOADER_FADE_TIME = 450;
const POSTER_FADE_TIME = 800;

function getCountdown() {
  const difference = Math.max(0, EVENT_DATE - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function Preloader({ visible }) {
  return (
    <div
      className={`preloader${visible ? "" : " preloader--hidden"}`}
      role="status"
      aria-label="Memuat halaman"
      aria-hidden={!visible}
    >
      <img src={assemblyLogo} alt="Assembly #19" className="preloader__logo" />
      <span className="preloader__spinner" aria-hidden="true" />
      <span className="preloader__text">Memuat...</span>
    </div>
  );
}

function PosterIntro({ visible, leaving, onNext }) {
  return (
    <div
      className={`poster-intro${visible ? " poster-intro--visible" : ""}${
        leaving ? " poster-intro--leaving" : ""
      }`}
      aria-label="Poster Assembly 19"
      aria-hidden={!visible}
      inert={!visible}
    >
      <img
        src={assemblyPoster}
        alt="Poster Assembly 19: Beyond the Boundaries"
        className="poster-intro__image"
      />
      <button
        className="poster-intro__next"
        type="button"
        onClick={onNext}
        tabIndex={visible ? 0 : -1}
      >
        Next <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}

function HeaderLogos() {
  return (
    <header className="logo-card">
      <a
        className="logo logo--pradita"
        href="https://pradita.ac.id"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pradita University"
      >
        <img
          className="logo__img logo__img--pradita"
          src={praditaLogo}
          alt="Logo Pradita University"
          width="5732"
          height="2481"
        />
      </a>
      <a
        className="logo logo--bem"
        href="https://www.instagram.com/bempradita"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="BEM Pradita University"
      >
        <img
          className="logo__img logo__img--bem"
          src={bemLogo}
          alt="Logo BEM Pradita University"
          width="795"
          height="571"
        />
      </a>
    </header>
  );
}

function SocialLinks() {
  return (
    <nav className="socials" aria-label="Media sosial BEM Pradita University">
      <a
        className="social-link social-link--youtube"
        href="https://www.youtube.com/channel/UCWSn5BGWEJemOcTdg5MW27w"
        aria-label="YouTube BEM Pradita University"
      >
        <FaYoutube aria-hidden="true" focusable="false" />
      </a>
      <a
        className="social-link social-link--tiktok"
        href="https://www.tiktok.com/@bempradita"
        aria-label="TikTok BEM Pradita University"
      >
        <FaTiktok aria-hidden="true" focusable="false" />
      </a>
      <a
        className="social-link social-link--instagram"
        href="https://www.instagram.com/bempradita/?hl=id"
        aria-label="Instagram BEM Pradita University"
      >
        <FaInstagram aria-hidden="true" focusable="false" />
      </a>
      <a
        className="social-link social-link--email"
        href="mailto:bem@pradita.ac.id"
        aria-label="Email BEM Pradita University"
      >
        <FaEnvelope aria-hidden="true" focusable="false" />
      </a>
    </nav>
  );
}

function MainContent({ countdown }) {
  const countdownItems = [
    ["days", "DAYS"],
    ["hours", "HRS"],
    ["minutes", "MINS"],
    ["seconds", "SECS"],
  ];

  return (
    <main className="content-card">
      <h1 className="title">ASSEMBLY #19</h1>
      <p className="paragraph">
        Sobat BEM, ngaku ya, siapa di sini yang pernah merasa risih sama
        bercandaan yang kelewatan, tapi bingung atau takut mau menegurnya? Atau
        pernah merasa segan menolak karena terpaut senioritas dan posisi? 🤔
      </p>
      <p className="paragraph">
        Tenang, kamu nggak sendirian! Kampus seharusnya jadi ruang tumbuh yang
        aman dan nyaman buat kita semua. Yuk, belajar bareng memahami batas
        pribadi (personal boundaries), consent, dan menjaga rasa aman di
        kehidupan kampus lewat ASSEMBLY #19 bertema:
      </p>
      <p className="paragraph">
        📌{" "}
        <strong>
          &ldquo;Beyond the Boundaries: Memahami Boundaries, Consent, dan
          Keamanan di Kehidupan Kampus&rdquo;
        </strong>
      </p>
      <p className="paragraph">
        Narasumber keren kita: 🎙️ Unit Perlindungan Perempuan dan Anak (PPA) |
        Sat Reskrim Polres Tangerang Selatan
      </p>
      <p className="paragraph">Di sesi kali ini, kita bakal kupas tuntas:</p>
      <p className="paragraph">
        ✅ Cara mengenali dan menyampaikan personal boundaries kamu
        <br />
        ✅ Memahami consent dan komunikasi yang sehat
        <br />
        ✅ Menanggapi ketimpangan relasi/senioritas
        <br />✅ Cara mencari bantuan &amp; pelaporan yang tepat
      </p>
      <p className="paragraph">
        Jangan sampai kelewatan ya! Mari ciptakan lingkungan kampus yang aman,
        saling menghargai, dan suportif bersama-sama 💙
      </p>

      <section className="rules">
        <h2 className="rules-title">Rules :</h2>
        <ol className="rules-list">
          <li>
            Wajib <strong>mengaktifkan kamera</strong> selama acara berlangsung
          </li>
          <li>
            Wajib <strong>Men - screenshot layar dengan kamera aktif</strong>{" "}
            untuk
            <strong> memenuhi syarat acara Assembly</strong> (Agar mendapatkan
            sertifikat)
          </li>
        </ol>
      </section>

      <hr className="divider" />
      <p className="zoom-note">
        <strong>
          ZOOM LINK TERTERA UNTUK SETIAP ANGKATAN,
          <br />
          SCROLL DOWN TO ENTER THE MEETING ROOM!
        </strong>
      </p>
      <hr className="divider" />
      <section className="countdown" aria-label="Hitung mundur menuju acara">
        {countdownItems.map(([key, label]) => (
          <div className="countdown-item" key={key}>
            <div className="countdown-box">{pad(countdown[key])}</div>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </section>
      <hr className="divider" />
      <SocialLinks />
    </main>
  );
}

function ZoomCard() {
  return (
    <section className="zoom-card" aria-labelledby="zoom-title">
      <h2 className="zoom-card__title" id="zoom-title">
        Zoom Mahasiswa Pradita
      </h2>
      <dl className="zoom-card__info">
        <div className="zoom-card__row">
          <dt>Meeting ID</dt>
          <dd>: 992 7619 2010</dd>
        </div>
        <div className="zoom-card__row">
          <dt>Passcode</dt>
          <dd>: Assembly19</dd>
        </div>
      </dl>
      <a
        className="btn btn--green"
        href="http://zoom.us/j/99276192010?pwd=Ng9NbmF6ujj7Rm785DqulzcX6bGpYA.1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="btn__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h8A2.5 2.5 0 0 1 16 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 16.5v-9zM17.4 10.2l3.1-2.4c.4-.3 1-.1 1 .5v7.4c0 .6-.6.8-1 .5l-3.1-2.4v-3.6z" />
        </svg>
        LINK TO ZOOM MEETING
      </a>
    </section>
  );
}

function VirtualBackground() {
  return (
    <section className="vbg" aria-labelledby="vbg-title">
      <h2 className="visually-hidden" id="vbg-title">
        Preview VBG peserta
      </h2>
      <div
        className="vbg__frame"
      >
        <img
          className="vbg__image"
          src={participantVirtualBackground}
          alt="Virtual background peserta Assembly #19"
        />
      </div>
      <a
        className="btn btn--orange"
        href="https://drive.google.com/file/d/1_0kpIm-GdchLtXA4Ja_is0Cs_v_aI_y2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="btn__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.4L11 13.6V4a1 1 0 0 1 1-1zM4 17a1 1 0 0 1 1 1v1h14v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
        </svg>
        DOWNLOAD VBG PESERTA
      </a>
    </section>
  );
}

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [posterVisible, setPosterVisible] = useState(false);
  const [posterLeaving, setPosterLeaving] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const startedAt = Date.now();
    let preloaderTimer;
    let fadeTimer;

    const revealPoster = () => {
      const remaining = Math.max(
        0,
        MINIMUM_PRELOADER_TIME - (Date.now() - startedAt),
      );
      preloaderTimer = window.setTimeout(() => {
        setPosterVisible(true);
        fadeTimer = window.setTimeout(
          () => setPreloaderVisible(false),
          PRELOADER_FADE_TIME,
        );
      }, remaining);
    };

    if (document.readyState === "complete") {
      revealPoster();
    } else {
      window.addEventListener("load", revealPoster, { once: true });
    }

    return () => {
      window.removeEventListener("load", revealPoster);
      window.clearTimeout(preloaderTimer);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const dismissPoster = () => {
    if (posterLeaving) return;
    setPosterLeaving(true);
    window.setTimeout(() => setPosterVisible(false), POSTER_FADE_TIME);
  };

  return (
    <>
      <Preloader visible={preloaderVisible} />
      <PosterIntro
        visible={posterVisible}
        leaving={posterLeaving}
        onNext={dismissPoster}
      />
      <HeaderLogos />
      <MainContent countdown={countdown} />
      <ZoomCard />
      <VirtualBackground />
    </>
  );
}
