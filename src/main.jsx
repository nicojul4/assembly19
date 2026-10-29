import React, { StrictMode, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CampusTour from "./CampusTour.jsx";
import "../styles.css";

function isCampusTour(url = window.location) {
  return (
    url.pathname.startsWith("/campus-tour") ||
    url.hash === "#campus-tour" ||
    new URLSearchParams(url.search).get("view") === "campus-tour"
  );
}

function Website() {
  const [showCampusTour, setShowCampusTour] = useState(() => isCampusTour());

  const changePage = useCallback((nextPage) => {
    const update = () => setShowCampusTour(nextPage);
    if (document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      const nextPage = isCampusTour(destination);
      if (nextPage === showCampusTour) return;

      event.preventDefault();
      window.history.pushState({}, "", destination.href);
      changePage(nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onPopState = () => changePage(isCampusTour());
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, [changePage, showCampusTour]);

  return showCampusTour ? <CampusTour /> : <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Website />
  </StrictMode>,
);
