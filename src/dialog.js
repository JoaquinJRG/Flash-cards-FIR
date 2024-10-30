import {Cards} from "./data.js"; 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("header > div > button");
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

form.addEventListener("submit", async (e) => {

  if (question.value == "" || answer.value == "") {
    dialog.close(); 
    return; 
  }; 

  const error = await Cards.store(question.value, answer.value); 
  console.log(error); 

  dialog.close();
}); 