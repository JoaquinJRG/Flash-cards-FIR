import {Cards} from "./data.js"; 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("header > button");
const closeButton = document.querySelector("dialog button");
const question = document.getElementById("question");
const answer = document.getElementById("answer"); 
const form = document.querySelector("form"); 


showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {

  if (question.value == "" || answer.value == "") {
    dialog.close(); 
    return; 
  }; 

  Cards.store(question.value, answer.value); 
  
  dialog.close();
}); 