import React, { useEffect, useState } from "react";
import praditaLogo from "../img/LOGO-PRADITA-removebg-preview.png";
import "../styles-campus-tour.css";

const LOCATIONS = [
  {
    id: "campus",
    label: "Kampus Pradita",
    eyebrow: "SELAMAT DATANG",
    title: "Mulai dari sini.",
    description:
      "Kenali gedung utama Pradita University di Scientia Business Park, Gading Serpong.",
    image: "/tour/campus.jpg",
    alt: "Gedung utama Pradita University",
    imagePosition: "center 54%",
  },
  {
    id: "auditorium",
    label: "Auditorium 1",
    eyebrow: "TUJUAN ACARA",
    title: "Sampai di Auditorium.",
    description:
      "ASSEMBLY #19 berlangsung di Auditorium 1, Gedung 1 Universitas Pradita. Gunakan peta untuk melihat lokasi kampus",
    image: "/tour/auditorium.jpg",
    alt: "Interior auditorium Pradita University dengan kursi bertingkat",
    imagePosition: "center 52%",
  },
];

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Universitas%20Pradita%2C%20Scientia%20Business%20Park%2C%20Tangerang&z=16&output=embed";
const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Universitas%20Pradita%2C%20Scientia%20Business%20Park%2C%20Tangerang";

export default function CampusTour() {
  const [activeLocationId, setActiveLocationId] = useState("campus");
  const activeLocation = LOCATIONS.find(({ id }) => id === activeLocationId);
  const homeUrl = window.location.pathname.startsWith("/campus-tour")
    ? "/"
    : window.location.pathname;
  const activeLocationNumber = String(
    LOCATIONS.findIndex(({ id }) => id === activeLocationId) + 1,
  ).padStart(2, "0");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Mengenal Pradita University";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="tour-page">
      <header className="tour-topbar">
        <a
          className="tour-brand"
          href={homeUrl}
          aria-label="Kembali ke Assembly #19"
        >
          <img
            className="tour-brand__logo"
            src={praditaLogo}
            alt="Pradita University"
          />
        </a>
        <a className="tour-back" href={homeUrl}>
          <span aria-hidden="true">←</span> Kembali ke Assembly #19
        </a>
      </header>

      <section className="tour-hero" aria-labelledby="tour-title">
        <img
          key={activeLocation.image}
          className="tour-hero__image"
          src={activeLocation.image}
          alt={activeLocation.alt}
          style={{ objectPosition: activeLocation.imagePosition }}
        />
        <div className="tour-hero__scrim" />

        <div className="tour-hero__content">
          <div id="tour-location-preview" aria-live="polite">
            <span className="tour-eyebrow">{activeLocation.eyebrow}</span>
            <h1 id="tour-title">{activeLocation.title}</h1>
            <p>{activeLocation.description}</p>
            <a
              className="tour-primary-button"
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka petunjuk arah <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="tour-explore" aria-label="Jelajahi lokasi kampus">
        <div className="tour-explore__intro">
          <span className="tour-eyebrow">JELAJAHI LOKASI</span>
          <h2>Dari gerbang kampus ke ruang acara.</h2>
          <p>Pilih titik yang ingin kamu lihat sebelum berangkat.</p>
        </div>

        <div
          className="tour-place-list"
          role="group"
          aria-label="Lokasi kampus"
        >
          {LOCATIONS.map((location, index) => {
            const selected = activeLocationId === location.id;
            return (
              <button
                className={`tour-place${selected ? " tour-place--active" : ""}`}
                type="button"
                aria-pressed={selected}
                aria-controls="tour-location-preview"
                key={location.id}
                onClick={() => {
                  setActiveLocationId(location.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span className="tour-place__number">0{index + 1}</span>
                <span className="tour-place__text">
                  <strong>{location.label}</strong>
                  <small>{index === 0 ? "GEDUNG UTAMA" : "ASSEMBLY #19"}</small>
                </span>
                <span className="tour-place__arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="tour-map-section" id="tour-map">
        <div className="tour-map-copy">
          <span className="tour-eyebrow">TEMUKAN KAMI</span>
          <h2>Menuju Pradita University</h2>
          <p>
            Scientia Business Park, Tower 1, Jalan Boulevard Gading Serpong,
            Tangerang, Banten.
          </p>
          <a
            className="tour-text-link"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="tour-map-frame">
          <iframe
            title="Peta lokasi Universitas Pradita di Gading Serpong"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="tour-footer">
        <a className="tour-brand tour-brand--footer" href={homeUrl}>
          <img
            className="tour-brand__logo"
            src={praditaLogo}
            alt="Pradita University"
          />
        </a>
        <a href={homeUrl}>Kembali ke Assembly #19 ↑</a>
      </footer>
    </main>
  );
}
