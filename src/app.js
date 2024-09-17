/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const suits = ["🦍", "🔥", "🕷️", "🐦‍🔥"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardInner = document.querySelector(".cardInner");
  const getCardButton = document.querySelector("#getCardButton");

  // Función para generar una carta nueva
  function getRandomCard() {
    const randomSuits = Math.floor(Math.random() * suits.length);
    const randomNumbers = Math.floor(Math.random() * numbers.length);

    document.querySelector(".top-suit").innerHTML = suits[randomSuits];
    document.querySelector(".bottom-suit").innerHTML = suits[randomSuits];
    document.querySelector(".number").innerHTML = numbers[randomNumbers];

    const isRed = suits[randomSuits] === "🔥" || suits[randomSuits] === "🐦‍🔥";
    document
      .querySelectorAll(".top-suit, .bottom-suit, .number")
      .forEach(element => {
        element.style.color = isRed ? "#dc143c" : "";
      });
  }

  // Evento de clic para generar una nueva carta
  if (getCardButton) {
    getCardButton.addEventListener("click", () => {
      getRandomCard();
    });
  } else {
    console.error("No se encontró el botón con el id 'getCardButton'");
  }

  // Evento de clic para voltear la carta
  if (cardInner) {
    cardInner.addEventListener("click", () => {
      cardInner.classList.toggle("flip");
    });
  } else {
    console.error("No se encontró el elemento con la clase 'cardInner'");
  }
};
