const btn = document.getElementById("kirim");
const pesanInput = document.getElementById("pesan");
const output = document.getElementById("tampilanPesan");

const beep = document.getElementById("beep");
const siren = document.getElementById("siren");

const pesanRandom = [
  "SYSTEM ERROR: OTAK TIDAK DITEMUKAN",
  "WARNING: GOBLOK TERDETEKSI",
  "CRITICAL ALERT: MALU SENDIRI GAK?",
  "ACCESS DENIED: IQ TERLALU RENDAH",
  "FATAL ERROR: KEBANYAKAN GAYA"
];

// auto nyala sirine
window.onload = () => {
  siren.volume = 0.4;
  siren.play();
};

btn.onclick = () => {
  const pesan = pesanInput.value.trim();
  beep.play();

  const text = pesan || pesanRandom[Math.floor(Math.random() * pesanRandom.length)];
  output.innerHTML = text;
  pesanInput.value = "";

  spawnPopup();
};

function spawnPopup() {
  const pop = document.createElement("div");
  pop.className = "popup";
  pop.innerText = pesanRandom[Math.floor(Math.random() * pesanRandom.length)];

  pop.style.left = Math.random() * (window.innerWidth - 200) + "px";
  pop.style.top = Math.random() * (window.innerHeight - 80) + "px";

  document.body.appendChild(pop);

  setTimeout(() => pop.remove(), 2000);
}

// popup chaos otomatis
setInterval(() => {
  if (Math.random() > 0.5) spawnPopup();
}, 1200);
