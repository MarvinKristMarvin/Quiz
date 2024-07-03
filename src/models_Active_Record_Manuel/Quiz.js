const { CoreModel } = require ('./CoreModel');

// on étend la classe CoreModel pour bénéficier de son travail :
// - propriétés id, created_at, updated_at
// - getters et setters
// - constructeur
class Quiz extends CoreModel{
  // on ajoute les propriétés spécifique au quiz
  #title;
  #description;
  #user_id;

  constructor(obj){
    // j'appelle le constructeur parent, ce qui permet d'initialiser : id, created_at, updated_at
    super(obj);

    this.title = obj.title;
    this.description = obj.description;
    this.user_id = obj.user_id;
  }

  // getter pour propriété #title
  get title(){
    return this.#title;
  }

  // setter pour la propriété #title
  set title(value){
    if (typeof value != 'string'){
      throw new Error ('title must be a string');
    }
    this.#title = value;
  }

  // getter pour propriété #description
  get description(){
    return this.#description;
  }

  // setter pour la propriété #description
  set description(value){
    if (typeof value != 'string' && value != undefined){
      throw new Error ('description must be a string');
    }
    this.#description = value;
  }

  // getter pour propriété #user_id
  get user_id(){
    return this.#user_id;
  }

  // setter pour la propriété #user_id
  set user_id(value){
    if (typeof value != 'number'){
      throw new Error ('user_id must be a number');
    }
    this.#user_id = value;
  }

}

module.exports = {
  Quiz,
};