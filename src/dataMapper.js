const client = require ('./client');
const { Level } = require ('./models/Level');

const dataMapper = {
  async getAllLevels(){
    const result = await client.query('SELECT * FROM level');

    const levels = [];

    for (const row of result.rows){
      const level = new Level(row);
      levels.push(level);
    }

    // plutot que de retourner un tableau d'objet comme précédemment
    // on retourne un tableau d'instance de la classe Level
    return levels;
  },

  async getOneLevel(id){
    const result = await client.query('SELECT * FROM level WHERE id = $1', [ id ]);
    if (result.rowCount > 0){
      // plutot que de retourner un objet, on retourne un objet de la classe Level
      return new Level(result.rows[0]);
    }

    return null;    
  }
};

module.exports = dataMapper;