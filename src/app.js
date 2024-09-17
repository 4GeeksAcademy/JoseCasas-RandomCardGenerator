/* eslint-disable */
// I couldn't find a way to make this more like "pokemon"; i hope you enjoy it as much as me coding it //
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

  function getRandomCard() {
    const randomSuits = Math.floor(Math.random() * suits.length);
    const randomNumbers = Math.floor(Math.random() * numbers.length);

    document.querySelector(".top-suit").innerHTML = suits[randomSuits];
    document.querySelector(".bottom-suit").innerHTML = suits[randomSuits];
    document.querySelector(".number").innerHTML = numbers[randomNumbers];

    // This was to set "Hearts" and "Diamonds" red////////↓↓↓↓↓↓↓

    const isRed = suits[randomSuits] === "🔥" || suits[randomSuits] === "🐦‍🔥";
    document
      .querySelectorAll(".top-suit, .bottom-suit, .number")
      .forEach(element => {
        element.style.color = isRed ? "#dc143c" : "";
      });
  }
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑/////

  getCardButton?.addEventListener("click", () => {
    getRandomCard();
  });

  cardInner?.addEventListener("click", () => {
    cardInner.classList.toggle("flip");
  });
};
