const selectElem = document.querySelector("#planets");
const defaultCard = document.querySelector(".cardDefault");
const mercury = document.querySelector(".cardMercury");
const venus = document.querySelector(".cardVenus");
const earth = document.querySelector(".cardEarth");
const moon = document.querySelector(".cardMoon");
const mars = document.querySelector(".cardMars");
const jupiter = document.querySelector(".cardJupiter");
const saturn = document.querySelector(".cardSaturn");
const uranus = document.querySelector(".cardUranus");
const pluto = document.querySelector(".cardPluto");
const neptune = document.querySelector(".cardNeptune");

//SELECT PLANET
selectElem.addEventListener("change", function (e) {
  const index = selectElem.selectedIndex;

  if (index === 0) {
    defaultCard.style.display = "flex";
    mercury.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index === 1) {
    mercury.style.display = "flex";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index === 2) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "flex";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 3) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "flex";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 4) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "flex";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 5) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "flex";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 6) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "flex";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 7) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "flex";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 8) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "flex";
    pluto.style.display = "none";
    neptune.style.display = "none";
  } else if (index == 9) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "none";
    neptune.style.display = "flex";
  } else if (index == 10) {
    mercury.style.display = "none";
    defaultCard.style.display = "none";
    venus.style.display = "none";
    earth.style.display = "none";
    moon.style.display = "none";
    mars.style.display = "none";
    jupiter.style.display = "none";
    saturn.style.display = "none";
    uranus.style.display = "none";
    pluto.style.display = "flex";
    neptune.style.display = "none";
  }

  e.preventDefault();
});

//Mass Calculate

const calculate = document.querySelector(".calculateBtn");
const earthWeight = document.querySelector("#weight");
const resultValue1 = document.querySelector(".resultForMercury");
const resultValue2 = document.querySelector(".resultForVenus");
const resultValue3 = document.querySelector(".resultForEarth");
const resultValue4 = document.querySelector(".resultForMoon");
const resultValue5 = document.querySelector(".resultForMars");
const resultValue6 = document.querySelector(".resultForJupiter");
const resultValue7 = document.querySelector(".resultForSaturn");
const resultValue8 = document.querySelector(".resultForUranus");
const resultValue9 = document.querySelector(".resultForNeptune");
const resultValue10 = document.querySelector(".resultForPluto");
const error = document.querySelector(".error");

eventListeners();

function eventListeners() {
  calculate.addEventListener("click", calculateWeight);
}

function calculateWeight(e) {
  

  const index = selectElem.selectedIndex;
  const InputValue = earthWeight.value;
  if (index === 1) {
    cw = (InputValue / 9.81) * 3.7;
    dw = cw.toFixed(1);
    resultValue1.textContent = dw;
  } else if (index === 2) {
    cw = (InputValue / 9.81) * 8.7;
    dw = cw.toFixed(1);
    resultValue2.textContent = dw;
  } else if (index === 3) {
    cw = (InputValue / 9.81) * 9.81;
    dw = cw.toFixed(1);
    resultValue3.textContent = dw;
  } else if (index === 4) {
    cw = (InputValue / 9.81) * 1.622;
    dw = cw.toFixed(1);
    resultValue4.textContent = dw;
  } else if (index === 5) {
    cw = (InputValue / 9.81) * 3.711;
    dw = cw.toFixed(1);
    resultValue5.textContent = dw;
  } else if (index === 6) {
    cw = (InputValue / 9.81) * 24.79;
    dw = cw.toFixed(1);
    resultValue6.textContent = dw;
  } else if (index === 7) {
    cw = (InputValue / 9.81) * 10.44;
    dw = cw.toFixed(1);
    resultValue7.textContent = dw;
  } else if (index === 8) {
    cw = (InputValue / 9.81) * 8.69;
    dw = cw.toFixed(1);
    resultValue8.textContent = dw;
  } else if (index === 9) {
    cw = (InputValue / 9.81) * 11.15;
    dw = cw.toFixed(1);
    resultValue9.textContent = dw;
  } else if (index === 10) {
    cw = (InputValue / 9.81) * 0.64;
    dw = cw.toFixed(1);
    resultValue10.textContent = dw;
  }

  e.preventDefault();
}
