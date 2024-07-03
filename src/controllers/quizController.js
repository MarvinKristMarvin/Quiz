const { Quiz, Tag, Level, Answer, Question } = require("../models/");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const quizController = {
  async renderQuizPage(req, res) {
    try {
      const quizz = await Quiz.findByPk(req.params.id, {
        include: [
          "author",
          Tag,
          {
            model: Question,
            include: [Answer, Level],
          },
        ],
      });

      if (!quizz) {
        return res.render("500");
      }

      res.render("quiz", { quizz, dayjs });
    } catch (error) {
      res.render("500");
    }
  },
};

module.exports = quizController;
