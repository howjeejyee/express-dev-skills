const skillModel = require('../models/skill');

module.exports = {
  // Index action - Get all skills
  index: (req, res) => {
    const skills = skillModel.getAll();
    res.render('skills/index', { skills });
  },

  // Show action - Get a specific skill
  show: (req, res) => {
    const { id } = req.params;
    const skill = skillModel.getOne(parseInt(id));
    res.render('skills/show', { skill });
  },
};
