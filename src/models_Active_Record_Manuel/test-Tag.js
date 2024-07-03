// import de la classe
const { Tag } = require ('./Tag');

// instanciation d'un objet
const monTag = new Tag ({ id: 1, name: 'cosmologie', created_at: "2024-06-27 09:36:00"});

// appel de la méthode toString : on constate que notre objet
// a bien été initialisé
console.log(monTag.toString());

// console.log(monTag.#id); 
// provoque une erreur : impossible d'acéder à une propriété privée depuis l'extérieur de la classe

monTag.name = 'relativité';

console.log(monTag.name);

