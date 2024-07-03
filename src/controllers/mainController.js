const { Quiz, Tag } = require("../models/");

const mainController = {
  async renderHomePage(_, res) {
    try {
      const quizzes = await Quiz.findAll({
        include: ["author", Tag],
        order: [["title", "ASC"]],
      });

      if (!quizzes) {
        return res.render("500");
      }

      res.render("home", { quizzes });
    } catch (error) {
      res.render("500");
    }
  },
};

module.exports = mainController;
