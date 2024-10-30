import { supa } from "./config.js";

export class Cards {

  static async getAll() {
    const data = await supa.from("Cards").select(); 
    return data; 

  }

  static async store(question, answer) {
    const { error } = await supa
      .from('Cards')
      .insert({
        question: question, 
        answer: answer
    }); 

    return error; 
  }

  static async delete(id) {
    const response = await supa.from("Cards").delete().eq("id", id); 

    return response; 
  }

}
