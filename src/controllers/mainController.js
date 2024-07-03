// 3 - récupération de la définition de la classe Level
const { Level } = require("../models/Level");

const mainController = {
  renderHomePage(_, res) {   
    
    res.render("home");
  }
};

module.exports = mainController;
