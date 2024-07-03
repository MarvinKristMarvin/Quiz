const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");
const quizController = require("./controllers/quizController");
const themeController = require("./controllers/themeController");

const router = new Router();

router.get("/", mainController.renderHomePage);

router.get("/levels", levelController.renderLevelsPage);
router.get("/levels/:id/delete", levelController.deleteLevelAction);

router.get("/quizz/:id", quizController.renderQuizPage);

router.get("/themes", themeController.renderThemePage);

module.exports = router;
