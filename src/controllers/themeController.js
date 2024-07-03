const { Quiz, Tag, Level, Answer, Question } = require("../models/");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const themeController = {
  async renderThemePage(_, res) {
    try {
      const tags = await Tag.findAll({
        include: Quiz,
      });
      console.log(tags);

      if (!tags) {
        return res.render("500");
      }

      res.render("tags", { tags });
    } catch (error) {
      res.render("500");
    }
  },
};

module.exports = themeController;
