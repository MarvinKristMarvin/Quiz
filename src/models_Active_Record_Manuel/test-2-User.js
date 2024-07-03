// Load environment variables
require("dotenv").config();

const { User } = require ('./User');

async function main (){

  // test de la méthode findById
  const user = await User.findById(1);
  console.log(user.email, user.id);

  // test de la méthode findByEmail
  const chuck = await User.findByEmail('chuck@oclock.io');
  console.log(chuck.email, chuck.id);


  try{
    // test de la méthode insert
    const john = new User({email: 'john@oclock.io', password: 'azerty', firstname: 'John', lastname: 'Doe'});
    await john.insert();
    console.log(john.email, john.id);

    // test de la méthode update
    john.password = "qwerty";
    await john.update();
    console.log(john.password);
  }catch(error){
    console.log(error);
    console.log('impossible d\'ajouter le user john');
  }

  // test de la méthode delete
  const john = await User.findByEmail('john@oclock.io');
  if (john){
    await john.delete();
  }
  
  // test de la méthode findAll
  const users = await User.findAll();
  for (const user of users){
    console.log(user.email, user.id);
  }
}

main ();