import { Cards } from "./data.js"; 

const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn"); 
const reverseBtn = document.getElementById("reverse-btn"); 
const deleteBtn = document.getElementById("delete"); 

let showAnswer = false; 
const cardsData = document.getElementById("cards-data"); 
const cardText = document.getElementById("card-text");  

const data = (await Cards.getAll()).data;  
let cardsLength = data.length; 
let currentCard = 1; 

if (!cardsLength) {
  rightBtn.parentElement.style.display = "none"; 
  cardsData.parentElement.style.display = "none"; 
  cardText.parentNode.style.display = "none"; 

} else {
  cardsData.innerText = `${currentCard} of ${cardsLength}`; 
  cardText.innerText = data[currentCard - 1].question; 
}

rightBtn.addEventListener("click", () => {

  if (currentCard == cardsLength) return; 

  showAnswer = false;
  currentCard++; 
  cardsData.innerText = `${currentCard} of ${cardsLength}`; 
  cardText.innerText = data[currentCard - 1].question;
});

leftBtn.addEventListener("click", () => {

  if (currentCard == 1) return; 

  showAnswer = false;
  currentCard--; 
  cardsData.innerText = `${currentCard} of ${cardsLength}`; 
  cardText.innerText = data[currentCard - 1].question;
}); 

reverseBtn.addEventListener("click", () => {

  cardText.innerText = ""; 
  cardText.parentElement.classList.toggle("rotate-vertical-center"); 
  deleteBtn.style.display = "none"; 

  showAnswer = !showAnswer; 

  setTimeout(() => {
    
    if (showAnswer) {
      cardText.innerText = data[currentCard - 1].answer;
    } else {
      cardText.innerText = data[currentCard - 1].question;
    }

    cardText.parentElement.classList.remove("rotate-vertical-center");
    deleteBtn.style.display = "block";
  }, 800); 

}); 

deleteBtn.addEventListener("click", async () => {
  
  await Cards.delete(data[currentCard - 1].id); 
  location.reload(); 
}); 