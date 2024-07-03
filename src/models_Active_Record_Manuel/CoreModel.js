const client = require ('../client');
class CoreModel{
  id;
  created_at;
  updated_at;

 static tableName = null;  

  constructor(obj){
    // this est l'objet courant
    this.id = obj.id;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }

  static async findAll(){
    console.log(`SELECT * FROM "${this.tableName}"`);

    const result = await client.query(`SELECT * FROM "${this.tableName}"`);

    const objects = [];

    for (const row of result.rows){
      // dans une méthode statique, this fait référence à la classe courante
      // on obtient donc des instances de la classe sur laquelle on appelle la méthode findAll
      const object = new this(row);
      objects.push(object);
    }

    return objects;
  }

}

module.exports = {
  CoreModel
};