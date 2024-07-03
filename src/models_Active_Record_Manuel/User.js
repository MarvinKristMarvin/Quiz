const client = require ('../client');
const { CoreModel } = require('./CoreModel');

class User extends CoreModel{
  email;
  password;
  firstname;
  lastname;
  
  static tableName = "user";  

  constructor(obj){
    super(obj);
    this.email = obj.email;
    this.password = obj.password;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;    
  }  

  static async findById(id){
    const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);

    if (result.rowCount !== 1){
      return null;
    }

    return new User(result.rows[0]);
  }

  static async findByEmail(email){
    const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);

    if (result.rowCount !== 1){
      return null;
    }

    return new User(result.rows[0]);
  }

  async insert(){
    const result = await client.query(`
      INSERT INTO "user" ("email", "password", "firstname", "lastname")
      VALUES ($1, $2, $3, $4)
      RETURNING "id"
    `, [this.email, this.password, this.firstname, this.lastname]);

    if (result.rowCount !== 1){
      throw new Error ('unable to insert the user');
    }

    this.id = result.rows[0].id;
  }


  async update(){
    const result = await client.query(`
      UPDATE "user"
      SET email = $1,
      password = $2,
      firstname = $3,
      lastname = $4,
      updated_at = NOW()
      WHERE id = $5
    `, [this.email, this.password, this.firstname, this.lastname, this.id]);
  }

  async delete(){
    const result = await client.query(`
      DELETE FROM "user"
      WHERE id = $1
    `, [this.id]);
  }


}

module.exports = {
  User
};