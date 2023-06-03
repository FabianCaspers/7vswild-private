// Array mit den Teilnehmerdaten
let teilnehmer = [
    {
      name: "Fritz Meinecke",
      rolle: "Gründer",
      alter: 32,
      gewicht: 79.4,
      groesse: 183,
      facebook: "https://www.facebook.com/fritzmeinecke/?locale=de_DE",
      instagram: "https://www.instagram.com/fritz.meinecke/?hl=de",
      youtube: "https://www.youtube.com/c/fritzmeinecke",
      bild: "../img/fritz.webp"
    },
    {
      name: "Survival Mattin",
      rolle: "Teilnehmer",
      alter: 38,
      gewicht: 93.9,
      groesse: 185,
      facebook: "https://www.facebook.com/SurvivalMattin/?locale=de_DE",
      instagram: "https://www.instagram.com/survival.mattin.official/?hl=de",
      youtube: "https://www.youtube.com/channel/UCyQAraT4FYcXgnUTLOj796Q",
      bild: "../img/mattin.webp"
    },
    {
      name: "Dave",
      rolle: "Teilnehmer",
      alter: 22,
      gewicht: 85.5,
      groesse: 187,
      facebook: "",
      instagram: "https://www.instagram.com/david.henrichs/",
      youtube: "https://www.youtube.com/c/DavidHenrichs",
      bild: "../img/dave.webp"
    },
    {
      name: "Niklas on fire",
      rolle: "Teilnehmer",
      alter: 25,
      gewicht: 78.1,
      groesse: 180,
      facebook: "",
      instagram: "https://www.instagram.com/niklas.on.fire/?hl=de",
      youtube: "https://www.youtube.com/channel/UCTycmDo0gW7o94yuUh8cReQ",
      bild: "../img/niklas.webp"
    },
    {
      name: "Bommel",
      rolle: "Teilnehmer",
      alter: 37,
      gewicht: 96.5,
      groesse: 180,
      facebook: "https://www.facebook.com/Der.Bommel.Original/?locale=de_DE",
      instagram: "https://www.instagram.com/der.bommel/?hl=de",
      youtube: "https://www.youtube.com/c/DerBommel",
      bild: "../img/bommel.webp"
    },
    {
      name: "Fabio",
      rolle: "Teilnehmer",
      alter: 35,
      gewicht: 84.7,
      groesse: 184,
      facebook: "https://www.facebook.com/F2theAbio/?locale=de_DE",
      instagram: "https://www.instagram.com/f2theabio/?hl=de",
      youtube: "https://www.youtube.com/channel/UCnDquwyoD2AJwGXym_vezHg",
      bild: "../img/fabio.webp"
    },
    {
      name: "Reloadiak",
      rolle: "Teilnehmer",
      alter: 28,
      gewicht: 81.1,
      groesse: 189,
      facebook: "",
      instagram: "https://www.instagram.com/r3loadiak/?hl=de",
      youtube: "https://www.youtube.com/channel/UCsXUJXBTKEyHsbx4e6u6Fug",
      bild: "../img/reloadiak.webp"
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
