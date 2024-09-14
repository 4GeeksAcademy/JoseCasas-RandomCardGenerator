/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const suits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
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
  // const cardElement = document.querySelector(".card");
  const cardInner = document.querySelector(".cardInner");
  const flipButton = document.querySelector("#flipButton");

  function getRandomCard() {
    const randomSuits = Math.floor(Math.random() * suits.length);
    const randomNumbers = Math.floor(Math.random() * numbers.length);

    document.querySelector(".top-suit").innerHTML = suits[randomSuits];
    document.querySelector(".bottom-suit").innerHTML = suits[randomSuits];
    document.querySelector(".number").innerHTML = numbers[randomNumbers];

    const isRed =
      suits[randomSuits] === "&hearts;" || suits[randomSuits] === "&diams;";
    document
      .querySelectorAll(".top-suit, .bottom-suit, .number")
      .forEach(element => {
        element.style.color = isRed ? "#dc143c" : "";
      });
  }

  flipButton.addEventListener("click", () => {
    if (cardInner.classList.contains("flip")) {
      cardInner.classList.remove("flip");
      setTimeout(() => {
        cardInner.style.visibility = "hidden";
        getRandomCard();
      }, 500);
    } else {
      getRandomCard();
      cardInner.style.visibility = "visible";
      cardInner.classList.add("flip");
    }
  });

  // getRandomCard();

  // document.querySelector("button").addEventListener("click", getRandomCard);
};
