/* =========================================================
   Countdown Assembly
   Target: Jumat, 30 Oktober 2026, 15.30 WIB (UTC+7)
   ========================================================= */

(function () {
  var TARGET = new Date("2026-10-30T15:30:00+07:00").getTime();

  var daysEl = document.getElementById("countdown-days");
  var hoursEl = document.getElementById("countdown-hours");
  var minutesEl = document.getElementById("countdown-minutes");
  var secondsEl = document.getElementById("countdown-seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  var timer = null;

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function render() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);

    daysEl.textContent = pad(Math.floor(totalSeconds / 86400));
    hoursEl.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    minutesEl.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    secondsEl.textContent = pad(totalSeconds % 60);
  }

  render();
  timer = setInterval(render, 1000);
})();
