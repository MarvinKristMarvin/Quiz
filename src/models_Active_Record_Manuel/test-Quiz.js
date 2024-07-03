// import de la classe
const { Quiz } = require ('./Quiz');

// instanciation d'un objet
const monQuiz = new Quiz ({ 
  id: 12,
  title: "mon premier quiz",
  description: "pour un coup d'essai...",
  user_id: 1,
  created_at: "now"
});

console.log(monQuiz.id);
console.log(monQuiz.title);