// Load environment variables
require("dotenv").config();

const { Level } = require ('./Level');

async function main (){

  const newLevel = new Level({name: 'trop dur'});
  await newLevel.insert();
  console.log(newLevel.id);

  const newLevel2 = new Level({});
  newLevel2.name = 'hyper facile';
  await newLevel2.insert();  
  newLevel2.name = 'super facile';
  await newLevel2.update();
  await newLevel2.delete();

  const levelToDelete = await Level.findById(4);
  if (levelToDelete){ // on ne supprime la ligne que si elle existe !
    await levelToDelete.delete();
  }


}

main();
