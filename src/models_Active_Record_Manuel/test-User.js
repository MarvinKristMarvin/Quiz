// import de la classe
const { User } = require ('./User');

// instanciation d'un objet
const monUser = new User ({ 
  id: 1,
  email: 'toto@oclock.io',
  password: 'azerty',
  created_at: "2024-06-27 09:36:00"
});

console.log('ici');
monUser.email = 'titi@oclock.io';

// interêt d'un setter, on peut ajouter des controles 
// lors des mises à jour des propriétés de l'objet
// on pourrait par exemple vérifier que le format de l'email est bien valide
// monUser.email = 42; erreur car 42 n'est pas de type string
