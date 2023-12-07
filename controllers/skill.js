const skillModel = require('../models/skill');

module.exports = {
  index: (req, res) => {
    const skills = skillModel.getAll();
    res.render('skills/index', { skills });
  },

  show: (req, res) => {
    const { id } = req.params;
    const skill = skillModel.getOne(parseInt(id));
    res.render('skills/show', { skill });
  },

  new: (req, res) => {
    res.render('skills/new');
  },

  create: (req, res) => {
    const { name, level } = req.body;
    const newSkill = {
      id: skills.length + 1,
      name,
      level,
    };
    skills.push(newSkill);
    res.redirect('/skills');
  },
};
