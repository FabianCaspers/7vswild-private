// Array mit den Teilnehmerdaten
let teilnehmer = [
    {
      name: "Fritz Meinecke",
      rolle: "Gründer",
      alter: 32,
      gewicht: 82.8,
      groesse: 183,
      facebook: "https://www.facebook.com/fritzmeinecke/?locale=de_DE",
      instagram: "https://www.instagram.com/fritz.meinecke/?hl=de",
      youtube: "https://www.youtube.com/c/fritzmeinecke",
      bild: "../img/fritz.webp"
    },
    {
      name: "Joris (Wildcard)",
      rolle: "Teilnehmer",
      alter: 23,
      gewicht: 68.8,
      groesse: 173,
      facebook: "",
      instagram: "https://www.instagram.com/joris_rdy/",
      youtube: "https://www.youtube.com/@joris_rdy/featured",
      bild: "../img/joris.webp"
    },
    {
      name: "Otto Bulletproof",
      rolle: "Teilnehmer",
      alter: 49,
      gewicht: 94.8,
      groesse: 187,
      facebook: "",
      instagram: "https://www.instagram.com/ottobulletproof/",
      youtube: "https://www.youtube.com/c/Bulletproofentrepreneur",
      bild: "../img/otto.webp"
    },
    {
      name: "Knossi",
      rolle: "Teilnehmer",
      alter: 36,
      gewicht: 100.9,
      groesse: 176,
      facebook: "https://www.facebook.com/jens.knossalla",
      instagram: "https://www.instagram.com/niklas.on.fire/?hl=de",
      youtube: "https://www.youtube.com/c/Knossi",
      bild: "../img/knossi.webp"
    },
    {
      name: "Sabrina Outdoor",
      rolle: "Teilnehmer",
      alter: 29,
      gewicht: 58.7,
      groesse: 170,
      facebook: "",
      instagram: "https://www.instagram.com/sabrinaoutdoor/",
      youtube: "https://www.youtube.com/c/SabrinaOutdoor",
      bild: "../img/sabrina.webp"
    },
    {
      name: "Sascha Huber",
      rolle: "Teilnehmer",
      alter: 30,
      gewicht: 80.3,
      groesse: 175,
      facebook: "",
      instagram: "https://www.instagram.com/sascha_huber_official/",
      youtube: "https://www.youtube.com/c/SaschaHuber",
      bild: "../img/sascha.webp"
    },
    {
      name: "Nova",
      rolle: "Teilnehmer",
      alter: 23,
      gewicht: 79.4,
      groesse: 179,
      facebook: "",
      instagram: "https://www.instagram.com/starletnova/?hl=de",
      youtube: "https://www.youtube.com/c/starletnova",
      bild: "../img/nova.webp"
    }
  ];

  // HTML-Code für die Teilnehmer generieren
let cardContainer = document.querySelector(".cardContainer");

for (let i = 0; i < teilnehmer.length; i++) {
  let teilnehmerData = teilnehmer[i];

  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="lines"></div>
    <div class="imgBx">
      <img src="${teilnehmerData.bild}" alt="">
    </div>
    <div class="content">
      <div class="details">
        <h2>${teilnehmerData.name}<br><span>${teilnehmerData.rolle}</span></h2>
        <div class="data">
          <h3>${teilnehmerData.alter}<br><span>Alter</span></h3>
          <h3>${teilnehmerData.gewicht} kg<br><span>Gewicht</span></h3>
          <h3>${teilnehmerData.groesse} cm<br><span>Grösse</span></h3>
        </div>
        <div class="actionBtn">
          <ul>
            <li style="--clr:#1da1f2"><a href="${teilnehmerData.facebook}"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            <li style="--clr:#dd2a7b"><a href="${teilnehmerData.instagram}"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li style="--clr:#ff0000"><a href="${teilnehmerData.youtube}"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  cardContainer.appendChild(card);
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const isDropdownMenu = target.matches(".dropdown-menu") || target.closest(".dropdown-menu");
  const isHamburgerBtn = target.matches("#hamburgerBtn") || target.closest("#hamburgerBtn");

  if (!isDropdownMenu && !isHamburgerBtn) {
    dropdownMenu.classList.remove("show");
  }
});
