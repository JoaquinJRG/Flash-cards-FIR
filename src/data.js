export class Cards {
  
  static data = []; 

  static getAll() {

    if (localStorage.hasOwnProperty("cards")) {
      this.data = JSON.parse(localStorage.getItem("cards")); 
    } else {
      localStorage.setItem("cards", JSON.stringify(this.data)); 
    }

    return this.data; 
  }

  static store(question, answer) {

    const newCard = {
      id: crypto.randomUUID(),
      question: question, 
      answer: answer
    }; 

    this.data.push(newCard); 
    localStorage.setItem("cards", JSON.stringify(this.data)); 

    return this.data; 
  }

  static delete(id) {
    this.data = this.data.filter((card) => card.id !== id); 
    localStorage.setItem("cards", JSON.stringify(this.data)); 

    return this.data; 
  }

  static edit() {

  }

}

/*

[
    {question: "Capital de Madagascar", answer: "Antananarivo"},
    {question: "Capital de Francia", answer: "París"},
    {question: "Capital de España", answer: "Madrid"},
    {question: "Capital de Alemania", answer: "Berlin"},
]

*/