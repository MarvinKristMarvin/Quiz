const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");


const router = new Router();

router.get("/", mainController.renderHomePage);

router.get("/levels", levelController.renderLevelsPage);
router.get("/levels/:id/delete", levelController.deleteLevelAction);

module.exports = router;
