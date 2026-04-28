let clicks = 0;

const button = document.getElementById("btn");
const opis = document.getElementById("opis");
const statusText = document.getElementById("status");
const clock = document.getElementById("clock");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

button.addEventListener("click", function () {
  clicks++;

  opis.textContent =
    "JavaScript deluje uspešno. Aplikacija je pripravljena za produkcijski deploy na Vercel.";

  statusText.textContent = "Gumb je bil kliknjen " + clicks + " krat.";
});

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const ime = document.getElementById("ime").value.trim();
  const sporocilo = document.getElementById("sporocilo").value.trim();

  if (ime === "" || sporocilo === "") {
    formMessage.style.color = "#dc2626";
    formMessage.textContent = "Prosimo, da izpolniš obe polji.";
    return;
  }

  formMessage.style.color = "#059669";
  formMessage.textContent =
    "Hvala, " + ime + "! Obrazec je uspešno preverjen brez backenda.";

  form.reset();
});