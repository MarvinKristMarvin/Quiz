class Tag{
  #id;
  #name;
  #created_at;
  #updated_at;

  constructor(obj){
    // this est l'objet courant
    this.#id = obj.id;
    this.#name = obj.name;
    this.#created_at = obj.created_at;
    this.#updated_at = obj.updated_at;
  }

    // getter pour propriété #id
    get id(){
      return this.#id;
    }

    // pas de setter pour l'id,
    // -> l'id n'est pas modifiable depuis l'extérieur    

    // getter pour propriété #name
    get name(){
      return this.#name;
    }
  
    // setter pour la propriété #name
    set name(value){
      this.#name = value;
    }

    // getter pour propriété #created_at
    get created_at(){
      return this.#created_at;
    }

    // pas de setter pour created_at,
    // -> created_at n'est pas modifiable depuis l'extérieur

    // getter pour propriété #updated_at
    get updated_at(){
      return this.#updated_at;
    }

    // setter pour propriété #updated_at
    set updated_at(value){
      this.#updated_at = value;
    }

    // méthode de la classe
    // pourra être appelée sur un objet de la classe Tag
    toString(){
      return `
      id: ${this.#id}
      name: ${this.#name}
      created_at: ${this.#created_at}
      updated_at: ${this.#updated_at}
      `;
    }
}

module.exports = {
  Tag
};