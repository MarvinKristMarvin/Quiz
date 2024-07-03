const client = require ('../client');
const { CoreModel } = require('./CoreModel');
// module dédié

// 1 - définition de la classe Level
class Level extends CoreModel{

  // propriétés de la classe (données)
  name;  

  static tableName = "level";

  // constructeur : permet de créer et configurer un nouvel
  // objet de la classe (une instance de la classe)
  // Le constructeur est invoqué grâce au mot clé new :
  // ex : const easy = new Level({ id: 1, name: 'facile'});
  constructor(obj){
    super(obj);
    this.name = obj.name;   
  }


  get beautifullName(){
    return "--" + this.name + "--";
  }  

  static async findById(id){
    const result = await client.query('SELECT * FROM "level" WHERE id = $1', [ id ]);
    if (result.rowCount > 0){
      // plutot que de retourner un objet, on retourne un objet de la classe Level
      return new Level(result.rows[0]);
    }

    return null;    
  }

  async insert(){
    const sqlQuery = `
      INSERT INTO "level" ("name")
      VALUES ($1)
      RETURNING "id";
    `;

    const result = await client.query(sqlQuery, [this.name]);

    if (result.rowCount === 0){
      throw new Error ('unable to insert level');
    }
        
    //on met à jour la propriété id de l'objet avec l'id généré par postgres
    this.id = result.rows[0].id;
  }

  async update(){

    const sqlQuery = `
      UPDATE "level"
      SET "name" = $1,
      updated_at = NOW()
      WHERE "id" = $2
    `;

    const result = await client.query(sqlQuery, [this.name, this.id]);
  }

  // 1 - requete qui permet d'effacer l'enregistrement d'id 42
  // -> DELETE FROM "level" WHERE "id" = 42;
  // 2 - dynamisation en s'appuyant sur les propriétés de l'objet courant
  // 3 - exemple d'utilisation quelconque
  // 4 - exemple d'utilisation pour supprimer l'enregistrement d'id 4
  async delete(){
    const sqlQuery = `
      DELETE FROM "level"
      WHERE "id" = $1;
    `;

    const result = await client.query(sqlQuery, [this.id]);
  }
  
}

// 2 - Mise à disposition de la classe Level au reste de l'application
module.exports = {
  Level
};