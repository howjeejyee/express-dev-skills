const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skill');

// Index route - Get all skills
router.get('/', skillsController.index);

// Show route - Get a specific skill
router.get('/:id', skillsController.show);

module.exports = router;
